import * as R from 'ramda';
import styled from 'styled-components';
import { fonts, types } from '@monorepo/theme';

const getFontSize = size => fonts.sizes[size] || R.head(fonts.sizes);

const StyledLabel = styled.span`
  font-family: ${fonts.family.fontSans};
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color};
  ${({ enabled }) => enabled && { ...types.labelEnabled }};
  ${({ active }) => active && { ...types.labelActive }};
`;

export default StyledLabel;
