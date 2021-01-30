import React from 'react';

import IButtonProps from './interface';
import { Container } from './styles';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  label,
  size,
  backgroundColor,
}) => {
  return (
    <Container backgroundColor={backgroundColor} size={size}>
      {label}
    </Container>
  );
};
