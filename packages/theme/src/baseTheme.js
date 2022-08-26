import { border } from './border';
import { buttons } from './buttons';
import { fonts } from './fonts';
import { types } from './types';

export {
  border,
  buttons,
  fonts,
  types,
};

const baseTheme = (
  theme = {
    border,
    buttons,
    fonts,
    types
  }
) => ({
    border,
    buttons,
    fonts,
    types
});

export default baseTheme;
