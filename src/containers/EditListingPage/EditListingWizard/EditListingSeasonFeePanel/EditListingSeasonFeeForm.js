import React from 'react';
import { bool, func, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import { futureIsOutsideRange } from '../../../../util/dates';

// These relative imports need to point to correct directories
import {
  intlShape,
  injectIntl,
  FormattedMessage,
} from '../../../../util/reactIntl';
import { propTypes } from '../../../../util/types';
import {
  Form,
  Button,
  FieldTextInput,
  FieldDateInput,
} from '../../../../components';

// Create this file using EditListingPricingForm.module.css
// as a template.
import css from './EditListingSeasonFeeForm.module.css';

export const EditListingSeasonFeeFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
      } = formRenderProps;

      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingSeasonFeeForm.updateFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          <FieldDateInput
            className={css.input}
            id="startDateHighSeason"
            name="startDateHighSeason"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.startDateHighSeason',
            })}
            placeholderText={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderStartDate' })}
            isOutsideRange={futureIsOutsideRange}
          />

          <FieldDateInput
            className={css.input}
            id="endDateHighSeason"
            name="endDateHighSeason"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.endDateHighSeason',
            })}
            placeholderText={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderEndDate' })}
            isOutsideRange={futureIsOutsideRange}
          />

           <FieldTextInput
            className={css.input}
            id="porcentageHighSeason"
            name="porcentageHighSeason"
            type="text"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.porcentageHighSeason',
            })}
            placeholder={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderPorcentage' })}
          /> 

         <FieldDateInput
            className={css.input}
            id="startDateMediumSeason"
            name="startDateMediumSeason"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.startDateMediumSeason',
            })}
            placeholderText={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderEndDate' })}
            isOutsideRange={futureIsOutsideRange}
          />
          <FieldDateInput
            className={css.input}
            id="endDateMediumSeason"
            name="endDateMediumSeason"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.endDateMediumSeason',
            })}
            placeholderText={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderEndDate' })}
            isOutsideRange={futureIsOutsideRange}
          />

           <FieldTextInput
            className={css.input}
            id="porcentageMediumSeason"
            name="porcentageMediumSeason"
            type="text"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.porcentageMediumSeason',
            })}
            placeholder={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderPorcentage' })}
          /> 

        <FieldDateInput
            className={css.input}
            id="startDateLowSeason"
            name="startDateLowSeason"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.startDateLowSeason',
            })}
            placeholderText={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderEndDate' })}
            isOutsideRange={futureIsOutsideRange}
          />


          <FieldDateInput
            className={css.input}
            id="endDateLowSeason"
            name="endDateLowSeason"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.endDateLowSeason',
            })}
            placeholderText={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderEndDate' })}
            isOutsideRange={futureIsOutsideRange}
          />

          <FieldTextInput
            className={css.input}
            id="porcentageLowSeason"
            name="porcentageLowSeason"
            type="text"
            label={intl.formatMessage({
              id: 'EditListingSeasonFeeForm.porcentageLowSeason',
            })}
            placeholder={intl.formatMessage({ id: 'EditListingSeasonFeeForm.placeholderPorcentage' })}

          /> 

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingSeasonFeeFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingSeasonFeeFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
};

export default compose(injectIntl)(
  EditListingSeasonFeeFormComponent
);