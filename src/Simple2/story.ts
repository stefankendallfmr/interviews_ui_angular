import {Meta, Story} from '@storybook/angular/types-6-0';
import {Simple2} from './index';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Simple1} from '../Simple1';

export default {
  title: 'Simple2',
  component: Simple2,
  decorators: [
    moduleMetadata({
      declarations: [Simple1],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Simple2> = (args: Simple2) => ({
  props: args,
});

export const Example = Template.bind({});
