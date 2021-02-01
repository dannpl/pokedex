import React from 'react';

import IInputProps from './interface';

import { Container } from './styles';

const Input: React.FC<IInputProps> = (props) => {
  return (
    <Container>
      <img className="icon" src={props.icon} alt="icon" />
      <input {...props} />
    </Container>
  );
};

export default Input;
