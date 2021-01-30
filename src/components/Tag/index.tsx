import React from 'react';

import ITag from './interface';

import { Container, Image, Name } from './styles';

const Tag: React.FC<ITag> = ({ typeName, typeImage }) => (
  <Container>
    <Image src={typeImage} />
    <Name>{typeName}</Name>
  </Container>
);

export default Tag;
