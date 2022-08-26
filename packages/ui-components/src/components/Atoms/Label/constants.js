import PropTypes from 'prop-types';
import * as R from 'ramda';
import { fonts } from '@monorepo/theme';

export const propTypes = {
  size: PropTypes.oneOf(R.keys(fonts.sizes)),
  color: PropTypes.string,
  children: PropTypes.node,
};
