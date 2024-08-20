import React from 'react';
import { bool, func, node, object, shape, string } from 'prop-types';
import classNames from 'classnames';

import Field, { hasDataInFields } from '../../Field';

import SectionContainer from '../SectionContainer';
import css from './SectionHero.module.css';

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
    options,
  } = props;

  // If external mapping has been included for fields
  // E.g. { h1: { component: MyAwesomeHeader } }
  const fieldComponents = options?.fieldComponents;
  const fieldOptions = { fieldComponents };

  const hasHeaderFields = hasDataInFields([title, description, callToAction], fieldOptions);

  return (
<<<<<<< HEAD
    <SectionContainer
      id={sectionId}
      className={className}
      rootClassName={classNames(rootClassName || css.root)}
      appearance={appearance}
      options={fieldOptions}
    >
      {hasHeaderFields ? (
        <header className={defaultClasses.sectionDetails}>
          <Field data={title} className={defaultClasses.title} options={fieldOptions} />
          <Field data={description} className={defaultClasses.description} options={fieldOptions} />
          <Field data={callToAction} className={defaultClasses.ctaButton} options={fieldOptions} />
        </header>
      ) : null}
    </SectionContainer>
=======
    <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <table>
      <tr>
        <td className={css.tdform}>
        <div className="container" id={css.container}>
          <form id={css.containerform} className="container mt-3 rounded">            
              <h1 id={css.h1prinfilter}>Book unique home for longer stay terms.</h1>
              <div className="form-group" id={css.formgroup}>
                <label>WHERE</label><br/>
                <input className="form-control" type="text" placeholder="Anywhere" name="destination" />
              </div>
              <div className="input-group-prepend" id={css.inputgroupprepend}>
                <label>CHECK IN</label> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                <label>CHECK OUT</label><br/>
              </div>
              <div className="input-group" id={css.inputgroupsmall}>
                <input className="form-control" type="date" placeholder="dd-mm-yyyy" name="checkin" />
                <input className="form-control" type="date" placeholder="dd-mm-yyyy" name="checkout" />
              </div>
              <br/>
              <div className="form-group" id={css.formgroupsmall}>
                <label>GUESTS</label><br/>
                <select className="custom-select">
                  <option value="1guest">1 guest</option>
                  <option value="Adults">Adults</option>
                  <option value="Children">Children</option>
                  <option value="Infants">Infant</option>
                </select><br/>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-lg" id={css.btnsearch}>Search</button>
              </div>
              
          </form>
        </div>
        </td>
        <td className={css.tdform}>
          <div className="container" id={css.divtitle}>
              <h3>What guests are saying about homes in New York</h3>
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" id={css.svgtitle}>
                  <path d="m21.95 9.48a.84.84 0 0 0 -.87-.48h-4.62a.5.5 0 0 0 0 1l4.14.01-4.81 4.17a.5.5 0 0 0 -.14.57l2.65 6.38-6.07-3.72a.5.5 0 0 0 -.52 0l-6.08 3.72 2.65-6.37a.5.5 0 0 0 -.13-.57l-4.75-4.18h5.75a.5.5 0 0 0 .46-.3l2.37-5.37 1.58 3.57a.5.5 0 0 0 .91-.41l-1.72-3.88a.8.8 0 0 0 -1.56-.01l-2.38 5.39h-5.9a.83.83 0 0 0 -.87.48.85.85 0 0 0 .32.96l4.85 4.25-2.78 6.67a.81.81 0 0 0 .16.98.66.66 0 0 0 .43.15 1.1 1.1 0 0 0 .56-.18l6.37-3.91 6.38 3.92a.81.81 0 0 0 .99.03c.15-.12.37-.41.15-1l-2.77-6.66 4.92-4.26a.84.84 0 0 0 .31-.95zm-.78.53h-.01" fill="#484848"></path>
                  <path d="m11 21.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-3.5-15.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm15 10h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-15-13h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm10.22 7.54a.84.84 0 0 0 -.17-.02q-.28-.01-3.19 0a .6.6 0 0 1 -.55-.35l-1.5-3.23a.42.42 0 0 0 -.75 0l-1.81 4.14a2.92 2.92 0 0 0 4.12 3.72l.46-.26 3.49-2.99.16-.18a.5.5 0 0 0 -.26-.82z"></path>
                  </svg>
                <p id={css.ptitle}>New York homes were rated
              <strong> 4.6 out of 5 stars</strong>
              with <strong> 210,000+ reviews </strong>
            </p>
          </div><br/>
          <div className="container" id={css.divcontainer1}>
            <div className="row" id={css.divrow1}>
              <div className="col-md-4">
                <img className="rounded" src="https://a0.muscache.com/im/pictures/01de0512-9191-474b-b5c1-7d0766f733ca.jpg?aki_policy=large" width="100%" height="100%"/>
              </div>              
              <div className="col-md-4">
                <img className="rounded" src="https://a0.muscache.com/im/pictures/49982382/37c921e0_original.jpg?aki_policy=large" width="100%" height="100%"/>
              </div>
            </div>
          </div>
          <div className="container" id={css.divcontainer2}>
            <div className="row" id={css.divrow2}>
              <div className="col-md-4">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>              
              <div className="col-md-4">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
          </div>
          <div className="container" id={css.divcontainer3}>
            <div className="row" id={css.divrow3}>
              <div className="col-md-4">
                <p>Diana and KC have been the perfect host. Even though they were in another country, they made sure all our needs are fulfilled.
                From sho...</p>
              </div>              
              <div className="col-md-4">
                <p>My name is Jeannette, and I stayed with my partner Matthew at Magpie Villa for a little under a week last week. Staying in Amita's...</p>
              </div>
            </div>
          </div>
          <div className="container" id={css.divcontainer4}>
            <div className="row" id={css.divrow4}>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-2">
                    <img src="https://a0.muscache.com/im/pictures/f7bb01c8-e346-4a76-b68f-c0c9a64efd1e.jpg?aki_policy=large" height="48" width="48" id="imgcontainer4_1"/>
                  </div>
                  <div className="col-md-10">
                    <p id={css.pcontainer4}>Umar</p>
                    <p>New York</p>
                  </div>
                </div>
              </div>              
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-2">
                    <img src="https://a0.muscache.com/im/pictures/8321142b-a689-47b1-bbd1-eba6e374ef52.jpg?aki_policy=large" height="48" width="48" id="imgcontainer4_3"/>
                  </div>
                  <div className="col-md-10">
                    <p id={css.pcontainer4_2}>Matthew</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </td>
      </tr>
    </table>    
    </>
>>>>>>> 159e1bc78982f13d74720f6ea8d5761a0088da8c
  );
};

const propTypeOption = shape({
  fieldComponents: shape({ component: node, pickValidProps: func }),
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
  options: null,
};

SectionHero.propTypes = {
  sectionId: string.isRequired,
  className: string,
  rootClassName: string,
  defaultClasses: shape({
    sectionDetails: string,
    title: string,
    description: string,
    ctaButton: string,
  }),
  title: object,
  description: object,
  appearance: object,
  callToAction: object,
  isInsideContainer: bool,
  options: propTypeOption,
};

export default SectionHero;
