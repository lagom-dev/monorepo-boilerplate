import PropTypes from 'prop-types';
import * as R from 'ramda';
import { buttons } from '@monorepo/theme';

export const { sizes, types } = buttons;

export const propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(R.keys(sizes)),
  type: PropTypes.oneOf(R.keys(types)),
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

const DEFAULT_SIZE = R.prop('0', R.keys(sizes));
const DEFAULT_TYPE = R.prop('0', R.keys(types));

export const defaultProps = {
  size: DEFAULT_SIZE,
  type: DEFAULT_TYPE,
  onClick: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {},
};
