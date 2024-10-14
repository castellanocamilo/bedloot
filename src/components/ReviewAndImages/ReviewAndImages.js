import React from 'react';
import css from './ReviewAndImages.module.css';

const ReviewAndImages = ({ featurelist, review, featurelistnew, reviewFeatured, renderStars }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td className={css.tdform}>
                        <div className="container" id={css.divtitle}>
                            <h3>What guests are saying about our places</h3>
                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" id={css.svgtitle}>
                                <path d="m21.95 9.48a.84.84 0 0 0 -.87-.48h-4.62a.5.5 0 0 0 0 1l4.14.01-4.81 4.17a.5.5 0 0 0 -.14.57l2.65 6.38-6.07-3.72a.5.5 0 0 0 -.52 0l-6.08 3.72 2.65-6.37a.5.5 0 0 0 -.13-.57l-4.75-4.18h5.75a.5.5 0 0 0 .46-.3l2.37-5.37 1.58 3.57a.5.5 0 0 0 .91-.41l-1.72-3.88a.8.8 0 0 0 -1.56-.01l-2.38 5.39h-5.9a.83.83 0 0 0 -.87.48.85.85 0 0 0 .32.96l4.85 4.25-2.78 6.67a.81.81 0 0 0 .16.98.66.66 0 0 0 .43.15 1.1 1.1 0 0 0 .56-.18l6.37-3.91 6.38 3.92a.81.81 0 0 0 .99.03c.15-.12.37-.41.15-1l-2.77-6.66 4.92-4.26a.84.84 0 0 0 .31-.95zm-.78.53h-.01" fill="#484848"></path>
                                <path d="m11 21.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-3.5-15.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm15 10h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-15-13h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm10.22 7.54a.84.84 0 0 0 -.17-.02q-.28-.01-3.19 0a .6.6 0 0 1 -.55-.35l-1.5-3.23a.42.42 0 0 0 -.75 0l-1.81 4.14a2.92 2.92 0 0 0 4.12 3.72l.46-.26 3.49-2.99.16-.18a.5.5 0 0 0 -.26-.82z"></path>
                            </svg>
                            <p id={css.ptitle}>Uruguay homes were rated
                                <strong> 5 out of 5 stars </strong> with <strong> 2+ reviews </strong>
                            </p>
                        </div><br/>
                        <div className="container" id={css.divcontainer1}>
                            <div className="row" id={css.divrow1}>
                                {featurelist.slice(0, 4).map((feature, index) => {
                                    const associatedReviews = review.filter(rev => rev.listingId === feature.listingId);
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="col-md-3" id={`imag_${index}`}>
                                                <a href={feature.uuidurl}>
                                                    <img className="rounded" src={feature.url} width="100%" height="50%"/>
                                                </a>
                                                {associatedReviews.map((rev, revIndex) => (
                                                    <div key={revIndex} className={css.gridItem}>
                                                        <div className="container" id={css.divcontainer1}>
                                                            <div className="row" id={css.divrow1}>
                                                                {renderStars(rev.rating)}
                                                            </div>
                                                        </div>
                                                        <div className="container" id={css.divcontainer1}>
                                                            <div className="row" id={css.divrow1}>
                                                                <p style={{ fontSize: '15px' }}>{rev.review}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className={css.tdform}>
                        <div className="container" id={css.divtitle}>
                            <h3>Here we have the Feature List</h3>
                        </div><br/>
                        <div className="container" id={css.divcontainer2}>
                            <div className="row" id={css.divrow2}>
                                {featurelistnew.slice(0, 4).map((feature, index) => {
                                    const associatedReviews = reviewFeatured.filter(rev => rev.listingId === feature.listingId);
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="col-md-3" id={`imag_${index}`}>
                                                <div style={{ backgroundColor: 'yellow', textAlign: 'center', padding: '5px', fontWeight: 'bold' }}>
                                                    Premium
                                                </div>
                                                <a href={feature.uuidurl}>
                                                    <img className="rounded" src={feature.url} width="100%" height="50%"/>
                                                </a>
                                                {associatedReviews.map((rev, revIndex) => (
                                                    <div key={revIndex} className={css.gridItem}>
                                                        <div className="container" id={css.divcontainer + revIndex}>
                                                            <div className="row" id={css.divrow1}>
                                                                {renderStars(rev.rating)}
                                                            </div>
                                                        </div>
                                                        <div className="container" id={css.divcontainer1}>
                                                            <div className="row" id={css.divrow1}>
                                                                <p style={{ fontSize: '15px' }}>{rev.review}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ReviewAndImages;
