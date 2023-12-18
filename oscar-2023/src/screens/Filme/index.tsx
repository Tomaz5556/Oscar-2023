import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, Movie, Description, Director, Image, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';

interface Filme {
  nome: string;
  imagem: any;
  descricao: string;
  diretor: string;
}

export function Filme({ filme }: { filme: Filme }) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Filme'>>();

  const handleConfirm = () => {
    navigation.navigate('Home');
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
        <Movie>{filme.nome}</Movie>
        <Image source={filme.imagem} />
        <Description>{filme.descricao}</Description>
        <Director>Diretor: {filme.diretor}</Director>
        <Button title="Reiniciar" onPress={handleConfirm} />
      </StyledLinearGradient>
    </ScrollView>
  );
}