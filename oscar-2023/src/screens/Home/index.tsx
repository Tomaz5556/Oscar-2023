import React from 'react';
import { Title, Ellipse2, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';

const estatueta = require('./estatueta-oscar.png');

export function Home() {
  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Title>Qual filme indicado ao Oscar 2023 você deve assistir?</Title>
      <Ellipse2 source={estatueta} />
      <Button title="Iniciar" onPress={() => {}} />
    </StyledLinearGradient>
  );
}