import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title, Movie, Description, Director, Image, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';

const filme = require('./banshees.jpg');

export function Filme() {
  const navigation = useNavigation();

  const handleConfirm = () => {
    navigation.navigate('Splash');
  }

  return (
    <ScrollView>
      <StyledLinearGradient
        colors={['#000000', '#a00000', '#ff0000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <Title>O filme que você deve assistir é</Title>
        <Movie>Os Banshees de Inisherin</Movie>
        <Image source={filme} />
        <Description>Estrelado por Colin Farrell e Brendan Gleeson, este filme ambientado na Irlanda dos anos 1920 é sobre dois melhores amigos que chegam a um impasse quando um deles decide que não quer mais ser amigo do outro.</Description>
        <Director>Diretor: Martin McDonagh.</Director>
        <Button title="Reiniciar" onPress={handleConfirm} />
      </StyledLinearGradient>
    </ScrollView>
  );
}