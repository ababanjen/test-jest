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
    item: {
      PMID: "34483505",
      summary: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. " ,
      tags: [{
        name: "Abstract Screening",
        info: [{
          name: "Clinical Trial",
          status: "Yes"
        }, {
          name: "Disease",
          status: "Unsure"
        }, {
          name: "Intervention",
          status: "Unsure"
        }, {
          name: "Outcome",
          status: "No"
        }, {
          name: "Treatment",
          status: "No"
        }]
      }, {
        name: "Full Text Review",
        info: [{
          name: "Clinical Trial",
          status: "No"
        }, {
          name: "Disease",
          status: "Yes"
        }, {
          name: "Intervention",
          status: "Yes"
        }, {
          name: "Outcome",
          status: "Unsure"
        }, {
          name: "Treatment",
          status: "No"
        }]
      }]
    }
  };
