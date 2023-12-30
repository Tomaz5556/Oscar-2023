import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, Movie, Description, Director, Image, StyledView } from './styles';
import { Button } from '../../components/Button';
import { storeData } from '../../GuardarDados';

interface Filme {
  nome: string;
  imagem: any;
  descricao: string;
  diretor: string;
}

export function Filme({ filme }: { filme: Filme }) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Filme'>>();

  useEffect(() => {
    storeData('filme', filme.nome);
  }, []);

  const handleConfirm = () => {
    navigation.navigate('Home');
  }

  return (
    <StyledView>
      <Title>O filme que você deve assistir é</Title>
      <Movie>{filme.nome}</Movie>
      <Image source={filme.imagem} />
      <Description>{filme.descricao}</Description>
      <Director>Diretor: {filme.diretor}</Director>
      <Button title="Reiniciar" onPress={handleConfirm} />
    </StyledView>
  );
}