import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import configs and util modules
import { FormattedMessage } from '../../../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../../../util/types';

// Import shared components
import { ListingLink } from '../../../../components';

// Import modules from this directory
import EditListingSeasonFeeForm from './EditListingSeasonFeeForm';

// Create this file using EditListingLocationPanel.module.css
// as a template.
import css from './EditListingSeasonFeePanel.module.css';

const  getInitialValues = props => {
  
  const { seasonFee } = props.listing?.attributes?.publicData || {};

  // console.log('seasonFee', seasonFee);

  const { startDateHighSeason, endDateHighSeason, startDateMediumSeason, endDateMediumSeason, startDateLowSeason, endDateLowSeason, 
    porcentageHighSeason, porcentageMediumSeason, porcentageLowSeason } = seasonFee || {};
  


  return {
      startDateHighSeason: startDateHighSeason || null,
      endDateHighSeason: endDateHighSeason || null,
      startDateMediumSeason: startDateMediumSeason || null,
      endDateMediumSeason: endDateMediumSeason || null,
      startDateLowSeason: startDateLowSeason || null,
      endDateLowSeason: endDateLowSeason || null,
      porcentageHighSeason: porcentageHighSeason || null,
      porcentageMediumSeason: porcentageMediumSeason || null,
      porcentageLowSeason: porcentageLowSeason || null,
    
  };
};

const EditListingSeasonFeePanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const isPublished =
    listing?.id && listing?.attributes.state !== LISTING_STATE_DRAFT;
  const initialValues = getInitialValues(props);
    console.log('initialValues', initialValues);
  return (
    <div className={classes}>
      <h1 className={css.title}>
        {isPublished ? (
          <FormattedMessage
            id="EditListingSeasonFeePanel.title"
            values={{ listingTitle: <ListingLink listing={listing} /> }}
          />
        ) : (
          <FormattedMessage id="EditListingSeasonFeePanel.createListingTitle" />
        )}
      </h1>
      <EditListingSeasonFeeForm
        className={css.form}
        initialValues={initialValues}
        onSubmit={values => {
         // const { seasonFee } = values;
          
          const updateValues = {
            publicData: { 
              seasonFee: {
                  startDateHighSeason: values.startDateHighSeason?.date?.toJSON() || null,
                  endDateHighSeason: values.endDateHighSeason?.date?.toJSON(),
                  startDateMediumSeason: values.startDateMediumSeason?.date?.toJSON() || null,
                  endDateMediumSeason: values.endDateMediumSeason?.date?.toJSON() || null,
                  startDateLowSeason: values.startDateLowSeason?.date?.toJSON() || null,
                  endDateLowSeason: values.endDateLowSeason?.date?.toJSON(),
                  porcentageHighSeason: values.porcentageHighSeason,
                  porcentageMediumSeason: values.porcentageMediumSeason,
                  porcentageLowSeason: values.porcentageLowSeason
              }
            }
          };
          console.log('updateValues', updateValues);
          
          // onSubmit (updateValues);
          onSubmit(updateValues);
        }}
        saveActionMsg={submitButtonText}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        autoFocus
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingSeasonFeePanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingSeasonFeePanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingSeasonFeePanel;