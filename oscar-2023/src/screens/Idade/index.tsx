import React from 'react';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';

export function Idade() {
  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}
    >
      <Title>Qual é a sua idade?</Title>
      <Button title="De 0 a 11 anos" onPress={() => {}} />
      <Button title="De 12 a 20 anos" onPress={() => {}} />
      <Button title="De 21 a 30 anos" onPress={() => {}} />
      <Button title="De 31 a 50 anos" onPress={() => {}} />
      <Button title="De 50 a 65 anos" onPress={() => {}} />
      <Button title="Acima de 66 anos" onPress={() => {}} />
    </StyledLinearGradient>
  );
}