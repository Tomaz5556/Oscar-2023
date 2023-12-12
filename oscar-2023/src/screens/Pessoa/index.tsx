import React from 'react';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';

export function Pessoa() {
  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Title>Quem você é?</Title>
      <Button title="Aluno" onPress={() => {}} />
      <Button title="Servidor" onPress={() => {}} />
    </StyledLinearGradient>
  );
}