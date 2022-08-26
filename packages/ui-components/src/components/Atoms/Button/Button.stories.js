import React from 'react';
import * as R from 'ramda';
import { Button } from '~Atoms';
import { sizes, types } from './constants';

const MOCK_TEXT = 'Consultar';
const DEFAULT_SIZE = R.prop('0', R.keys(sizes));

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: MOCK_TEXT,
    size: DEFAULT_SIZE,
  },
  argTypes: {
    size: { control: 'inline-radio', options: R.keys(sizes) },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

export const ButtonTypes = ({ ...args }) => (
    Object.keys(types).map(typeOfButton => (
      <Button {...args} type={typeOfButton} key={typeOfButton} />
    ))
);
