import React from 'react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '@monorepo/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={baseTheme}>
      <center>
        <Story />
      </center>
    </ThemeProvider>
  ),
];
