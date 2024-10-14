import React, { useState, useEffect } from 'react';

import { bool, func, node, object, shape, string } from 'prop-types';

import Nav from '../../../../components/Nav/Nav.js';
import ReviewAndImages from '../../../../components/ReviewAndImages/ReviewAndImages.js';

import css from './SectionHero.module.css';


const { UUID, LatLng } = require('sharetribe-flex-sdk').types;

const sharetribeSdk = require('sharetribe-flex-sdk');
const sdkUtil = sharetribeSdk.util;

const sdk = sharetribeSdk.createInstance({
    clientId: '0d231f7c-8c3f-4e56-8add-439329f9b59b'
});

// Section component for a website's hero section
// The Section Hero doesn't have any Blocks by default, all the configurations are made in the Section Hero settings
const SectionHero = props => {
    const {
        sectionId,
        className,
        rootClassName,
        defaultClasses,
        title,
        description,
        appearance,
        callToAction,
        options
    } = props;

    const [data, setData] = useState([]);
    const [review, setReview] = useState([]);
    const [reviewFeatured, setReviewFeatured] = useState([]);
    const [featurelist, setFeatured] = useState([]);
    const [featurelistnew, setFeaturedNew] = useState([]);
    const [isFeatured, setIsFeatured] = useState(false);
    const [bounds, setBounds] = useState('');
    const [coords, setCoords] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const boundsParam = urlParams.get('bounds');
        if (boundsParam) {
            setBounds(boundsParam);
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoords(position.coords);
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    const renderStars = (rating) => {
        const stars = [];
        const ratingMax = 5;
        for (let i = 0; i < ratingMax; i++) {
            stars.push(
                <span key={i} className={`fa ${i < rating ? 'fa-star' : 'fa-star-o'}`}></span>
            );
        }
        return stars;
    };

    const fetchListingsFeatured = (featured, coords) => {
        const origin = new LatLng(coords.latitude, coords.longitude);
        console.log('origin', origin);  
        const criteria = {
            origin: origin,
            pub_categoryLevel1: featured,
            pub_featured: 'true',
            include: ['images']
        };
        if (!featured || featured == 'All Categories') {
            delete criteria.pub_categoryLevel1;
        }
        sdk.listings.query(criteria).then(res => {    
            const reviewListngFull = [];  
            res.data.data.forEach(listing => {
                sdk.listings.show({
                    id: listing.id.uuid,
                    include: ['images'],
                    'fields.image': ['variants.square-small', 'variants.myvariant'],
                    'imageVariant.myvariant': sdkUtil.objectQueryString({
                        w: 320,
                        h: 320,
                        fit: 'scale'
                    })
                }).then(aux => {
                    if (reviewListngFull.length < 4) {
                        const objret = {};
                        objret.url = aux.data.included[0].attributes.variants.myvariant.url;
                        objret.uuidurl = '/l/' + aux.data.data.id.uuid;
                        objret.listingId = aux.data.data.id.uuid;
                        reviewListngFull.push(objret);
                    } 
                });
                setFeaturedNew(reviewListngFull);
            });
        });
    };
    
    const fetchListings = (featured, coords) => {
        const origin = new LatLng(coords.latitude, coords.longitude);
        const criteria = {
            origin: origin,
            pub_reviewcaliff: 5,
            pub_categoryLevel1: featured,
            pub_featured: 'false',
            include: ['images']
        };
        if (!featured || featured == 'All Categories') {
            delete criteria.pub_categoryLevel1;
        }
        sdk.listings.query(criteria).then(res => {
            const reviewListng = [];
            const listingPromises = res.data.data.map(listing => {
                reviewListng.push(listing.id.uuid);
                return sdk.listings.show({
                    id: listing.id.uuid,
                    include: ['images'],
                    'fields.image': ['variants.square-small', 'variants.myvariant'],
                    'imageVariant.myvariant': sdkUtil.objectQueryString({
                        w: 320,
                        h: 320,
                        fit: 'scale'
                    })
                });
            });

            Promise.all(listingPromises).then(results => {
                const reviewListngFull = results.map(result => {
                    const objret = {};
                    objret.url = result.data.included[0].attributes.variants.myvariant.url;
                    objret.uuidurl = '/l/' + result.data.data.id.uuid;
                    objret.listingId = result.data.data.id.uuid;
                    return objret;
                });
                setFeatured(reviewListngFull);
            });
            setData(reviewListng);
        });
    };

    const fetchListingsAndReviews = (listingIds, isFeatured) => {
        const listingPromises = listingIds.map(id => {
            return sdk.listings.show({
                id: id,
                include: ['images'],
                'fields.image': ['variants.square-small', 'variants.myvariant'],
                'imageVariant.myvariant': sdkUtil.objectQueryString({
                    w: 320,
                    h: 320,
                    fit: 'scale'
                })
            });
        });
        Promise.all(listingPromises).then(results => {
            const featureListnew = results.map(result => {
                const objret = {};
                objret.url = result.data.included[0].attributes.variants.myvariant.url;
                objret.uuidurl = '/l/' + result.data.data.id.uuid;
                objret.listingId = result.data.data.id.uuid;
                objret.calif = result.data.data.attributes.publicData.reviewcaliff;
                return objret;
            });
            const reviewsPromises = listingIds.map(id => {
                return sdk.reviews.query({
                    listingId: id
                }).then(res => ({
                    listingId: id,
                    reviews: res.data.data
                }));
            });
            Promise.all(reviewsPromises).then(reviews => {
                const allAttributes = reviews.flatMap(({ listingId, reviews }) => 
                    reviews.map(review => ({
                        listingId: listingId,
                        review: review.attributes.content,
                        rating: review.attributes.rating
                    }))
                );
                const mergedData = featureListnew.map(feature => {
                    const matchingReviews = allAttributes.filter(attr => attr.listingId === feature.listingId);
                    return {
                        ...feature,
                        reviews: matchingReviews
                    };
                });
                const allReviews = mergedData.flatMap(feature => feature.reviews);
                if (!isFeatured) {
                    setFeatured(mergedData);
                    setReview(allReviews);
                } else {
                     // console.log('reviewFeatured');
                    setReviewFeatured(reviewFeatured);
                }
            });
        });
    };

    useEffect(() => {
        fetchListings(isFeatured, coords);
    }, [isFeatured, coords]);

    useEffect(() => {
        fetchListingsFeatured(isFeatured, coords);
    }, [isFeatured, coords]);

    useEffect(() => {
        if (data.length > 0) {
            fetchListingsAndReviews(data, false);
        }
    }, [data]);

    useEffect(() => {
        if (featurelistnew.length > 0) {
            fetchListingsAndReviews(featurelistnew, true);
        }
    }, [featurelistnew]);

    const handleMenuClick = (event) => {
        const client = event.target.textContent.trim();
        setIsFeatured(client);
    };

    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Nav handleMenuClick={handleMenuClick}/>
            <ReviewAndImages
                featurelist={featurelist}
                review={review}
                featurelistnew={featurelistnew}
                reviewFeatured={reviewFeatured}
                renderStars={renderStars}
            />
        </>
    );

};

const propTypeOption = shape({
    fieldComponents: shape({ component: node, pickValidProps: func })
});

SectionHero.defaultProps = {
    className: null,
    rootClassName: null,
    defaultClasses: null,
    textClassName: null,
    title: null,
    description: null,
    appearance: null,
    callToAction: null,
    isInsideContainer: false,
    options: null
};

export default SectionHero;
