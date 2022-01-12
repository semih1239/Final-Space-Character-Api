import React from 'react';
// Styles
import { Wrapper, StyledGender } from './Card.styles';

interface Props {
  name: string;
  image: string;
  gender: string;
}

const Card = ({ name, image, gender }: Props) => (
  <Wrapper>
    <p>{name}</p>
    <img src={image} alt='character' />
    <StyledGender color='green' gender={gender} />
  </Wrapper>
);

export default Card;
