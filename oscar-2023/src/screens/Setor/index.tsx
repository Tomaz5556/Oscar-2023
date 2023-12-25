import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient, StyledTextInput } from './styles';
import { Button } from '../../components/Button';
import { ButtonItem } from '../../components/ButtonItem';
import { ItemList } from '../../components/ItemList';
import { storeData } from '../../AsyncStorageOperations';
import theme from '../../global/styles/theme';

const setores = [
  'Direção Geral',
  'Coordenação de Gabinete',
  'Coordenação de Gestão de Pessoas - CGP',
  'Departamento Financeiro - Compras',
  'Direção de Ensino',
  'Diretoria de Pesquisa',
  'Diretoria de Extensão',
  'Docentes',
  'Setor de Estágio',
  'Núcleo Pedagógico',
  'CGAE',
  'Almoxarifado',
  'Biblioteca',
  'Secretaria',
  'Gestão de Tecnologia da Informação - CGTI',
  'Segurança - Vigilância',
  'Lavanderia',
  'Fadetec',
  'Outro: Qual?'
];

export function Setor() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Setor'>>();
  
  const [showSectors, setShowSectors] = React.useState(false);

  const [selectedSector, setSelectedSector] = React.useState<string | null>(null);
  const [otherSector, setOtherSector] = React.useState('');
  const [showInput, setShowInput] = React.useState(false);

  const handlePressItem = (item: string) => {
    setSelectedSector(item);
    if (item === 'Outro: Qual?') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleConfirm = async () => {
    if (selectedSector === null || (selectedSector === 'Outro: Qual?' && otherSector === '')) {
      Alert.alert('Erro', 'Por favor, selecione ou digite um setor.', [{ text: 'OK' }]);
    } else {
      const sectorToStore = selectedSector === 'Outro: Qual?' ? otherSector : selectedSector;
      await storeData('setor', sectorToStore);
      navigation.navigate('Quiz');
    }
  };  

  const handleToggleSectors = () => {
    setShowSectors(!showSectors);
    setShowInput(false);
  };

  return (
    <StyledLinearGradient
      colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Title>Qual é o seu setor?</Title>
      <ButtonItem title={showSectors ? "Selecione o Setor   ▲" : "Selecione o Setor   ▼"} onPress={handleToggleSectors} />
      {showSectors && <ItemList data={setores} onPressItem={handlePressItem} />}
      {showInput && showInput && selectedSector === 'Outro: Qual?' && 
        <StyledTextInput 
          placeholder="Digite o setor" 
          value={otherSector}
          onChangeText={setOtherSector}
        />
      }
      <Button title="Confirmar" onPress={handleConfirm} />
    </StyledLinearGradient>
  );
}