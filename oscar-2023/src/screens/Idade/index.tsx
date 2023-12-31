import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';
import { storeData } from '../../store';
import theme from '../../global/styles/theme';

export function Idade() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Idade'>>();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledLinearGradient
        colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Title>Qual é a sua idade?</Title>
        <Button title="De 0 a 11 anos" onPress={() => { navigation.navigate('Pessoa'); storeData('idade', 'De 0 a 11 anos'); }} />
        <Button title="De 12 a 20 anos" onPress={() => { navigation.navigate('Pessoa'); storeData('idade', 'De 12 a 20 anos'); }} />
        <Button title="De 21 a 30 anos" onPress={() => { navigation.navigate('Pessoa'); storeData('idade', 'De 21 a 30 anos'); }} />
        <Button title="De 31 a 50 anos" onPress={() => { navigation.navigate('Pessoa'); storeData('idade', 'De 31 a 50 anos'); }} />
        <Button title="De 50 a 65 anos" onPress={() => { navigation.navigate('Pessoa'); storeData('idade', 'De 50 a 65 anos'); }} />
        <Button title="Acima de 66 anos" onPress={() => { navigation.navigate('Pessoa'); storeData('idade', 'Acima de 66 anos'); }} />
      </StyledLinearGradient>
    </ScrollView>
  );
}