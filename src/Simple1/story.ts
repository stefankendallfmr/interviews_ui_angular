import { Story, Meta } from '@storybook/angular/types-6-0';
import {Simple1} from './index';

export default {
  title: 'Simple1',
  component: Simple1,
} as Meta;

const Template: Story<Simple1> = (args: Simple1) => ({
  props: args,
});

export const Example = Template.bind({});
Example.args = {
  value: 'this is a value',
};
