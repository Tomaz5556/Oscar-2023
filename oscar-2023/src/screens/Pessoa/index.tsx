import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';

export function Pessoa() {
  const navigation = useNavigation();
  
  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Title>Quem você é?</Title>
      <Button title="Aluno" onPress={() => navigation.navigate('Curso')} />
      <Button title="Servidor" onPress={() => navigation.navigate('Setor')} />
    </StyledLinearGradient>
  );
}