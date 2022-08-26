import { border } from './border';
import colors from './baseColors';

export const buttons = {
  types: {
    primary: {
      color: colors.brandcolor.light,
      border: `${border.width.borderSm} ${border.style.solid} ${colors.brandcolor.primary}`,
      backgroundColor: colors.brandcolor.primary,
    },

    secondary: {
      color: colors.brandcolor.dark,
      border: `${border.width.borderSm} ${border.style.solid} ${colors.brandcolor.secondary}`,
      backgroundColor: colors.brandcolor.secondary,
    },
  },
};
