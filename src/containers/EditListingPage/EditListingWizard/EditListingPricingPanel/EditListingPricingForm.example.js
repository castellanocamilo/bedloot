/* eslint-disable no-console */
import EditListingPricingForm from './EditListingPricingForm';

export const Empty = {
  component: EditListingPricingForm,
  props: {
    onSubmit: values => {
      console.log('Submit EditListingPricingForm with (unformatted) values:', values);
    },
    saveActionMsg: 'Save price',
    marketplaceCurrency: 'USD',
    unitType: 'day',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
  },
  group: 'page:EditListingPage',
};
