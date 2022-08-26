import styled from 'styled-components';
import { types } from './constants';
import { border } from '@monorepo/theme';

const getButtonType = type => types[type];

const StyledButton = styled.button`
  ${({ type }) => getButtonType(type)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${border.radius.borderMd};
  padding: 16px;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  margin: 16px;
  display:flex;
`;

export default StyledButton;
