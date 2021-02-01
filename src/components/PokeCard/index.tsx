import React from 'react';

import Tag from '../Tag';

import ITag from '../Tag/interface';
import IPokeCard from './interface';

import { Container, Id, Name } from './styles';

const PokeCard: React.FC<IPokeCard> = ({ tags = [], name, id }) => {
  return (
    <Container>
      <Id>{id}</Id>
      <Name>{name}</Name>
      {tags.map((item: ITag, index: number): any => (
        <Tag key={index} typeImage={item.typeImage} typeName={item.typeName} />
      ))}
    </Container>
  );
};

export default PokeCard;
