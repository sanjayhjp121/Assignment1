import { fn } from '@storybook/test';
import Button from './Button'; // Assuming Button component is default exported from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }, // Use action to log events in the actions panel
  },
};

// More on writing stories with args: https://storybook.js.org/docs/essentials/writing-stories/#:~:text=Adding%20stories
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};