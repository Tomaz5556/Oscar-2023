import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, Movie, Description, Director, Image, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';
import { storeData } from '../../AsyncStorageOperations';
import theme from '../../global/styles/theme';

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
    <ScrollView>
      <StyledLinearGradient
        colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
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