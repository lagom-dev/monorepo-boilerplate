import React from 'react';
import * as R from 'ramda';
import { Label } from '~Atoms';
import { fonts } from '@monorepo/theme';

const MOCK_TEXT = 'Placa';
const DEFAULT_SIZE = R.last(R.keys(fonts.sizes));

export default {
  title: 'Atoms/Label',
  component: Label,
  args: {
    children: MOCK_TEXT,
    size: DEFAULT_SIZE,
  },
  argTypes: {
    color: { control: 'color' },
    children: { control: 'text' },
    size: { control: 'inline-radio', options: R.keys(fonts.sizes) },
  },
};

export const EnabledLabel = args => <Label {...args} enabled />;

export const ActiveLabel = args => <Label {...args} active />;
