import Component from './';
import model from './model';
import mocks from './mockdata.json';
import { storiesOf } from '@storybook/react';

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => <Component slice={variation} />);
});
