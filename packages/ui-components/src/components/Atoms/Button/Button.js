import React from 'react';
import { propTypes, defaultProps } from './constants';
import StyledButton from './style';

const Button = ({ children, onClick, onMouseOver, onMouseLeave, ...props }) => (
  <StyledButton {...props} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
    {children}
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
