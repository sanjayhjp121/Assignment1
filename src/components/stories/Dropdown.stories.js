import React from 'react';
import Dropdown from '../dropdown/dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text', description: 'Label for the dropdown' },
    labelVisibility: {
      control: {
        type: 'radio',
        options: ['Visible', 'Hidden'],
      },
      description: 'Controls the visibility of the label',
    },
    status: {
      control: {
        type: 'radio',
        options: ['Unfilled', 'Filled', 'Disabled', 'Error'],
      },
      description: 'The current state of the dropdown',
    },
    labelIconVisibility: {
      control: {
        type: 'radio',
        options: ['Visible', 'Hidden'],
      },
      description: 'Controls the visibility of the label icon',
    },
    leftIconVisibility: {
      control: {
        type: 'radio',
        options: ['Visible', 'Hidden'],
      },
      description: 'Controls the visibility of the left icon',
    },
    helperText: { control: 'text', description: 'Helper text for the dropdown' },
    required: {
      control: {
        type: 'radio',
        options: ['Yes', 'No'],
      },
      description: 'Specifies if the field is required',
    },
    text: { control: 'text', description: 'Placeholder text for the dropdown' },
    type: {
      control: {
        type: 'radio',
        options: ['SingleNoIcon', 'SingleRadio', 'Multi'],
      },
      description: 'Dropdown type (single or multi-selection)',
    },
    activeItemIndex: { control: 'number', description: 'Index of the currently active item' },
    items: { control: 'array', description: 'Array of items for the dropdown' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select an Option',
  labelVisibility: 'Visible',
  status: 'Unfilled',
  labelIconVisibility: 'Visible',
  leftIconVisibility: 'Visible',
  helperText: 'Please choose an option from the dropdown',
  required: 'No',
  text: 'Select...',
  type: 'SingleNoIcon',
  activeItemIndex: -1,
  items: ['Option A', 'Option B', 'Option C'],
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  status: 'Filled',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  status: 'Disabled',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  status: 'Error',
  helperText: 'There was an error with your selection',
};