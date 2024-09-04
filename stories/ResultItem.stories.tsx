import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ResultItemComponent from './ResultItem';

export default {
    title: 'ResultItem',
    component: ResultItemComponent,
} as Meta;

const Template: StoryFn<typeof ResultItemComponent> = (args) => <ResultItemComponent {...args} />;

export const ResultItem = Template.bind({});
ResultItem.args = {
};
