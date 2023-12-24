import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';
import { storeData } from '../../AsyncStorageOperations';

export function Idade() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Idade'>>();
  
  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}
    >
      <Title>Qual é a sua idade?</Title>
      <Button title="De 0 a 11 anos" onPress={() => {navigation.navigate('Pessoa'); storeData('idade', 'De 0 a 11 anos');}} />
      <Button title="De 12 a 20 anos" onPress={() => {navigation.navigate('Pessoa'); storeData('idade', 'De 12 a 20 anos');}} />
      <Button title="De 21 a 30 anos" onPress={() => {navigation.navigate('Pessoa'); storeData('idade', 'De 21 a 30 anos');}} />
      <Button title="De 31 a 50 anos" onPress={() => {navigation.navigate('Pessoa'); storeData('idade', 'De 31 a 50 anos');}} />
      <Button title="De 50 a 65 anos" onPress={() => {navigation.navigate('Pessoa'); storeData('idade', 'De 50 a 65 anos');}} />
      <Button title="Acima de 66 anos" onPress={() => {navigation.navigate('Pessoa'); storeData('idade', 'Acima de 66 anos');}} />
    </StyledLinearGradient>
  );
}