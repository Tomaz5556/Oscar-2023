import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient, StyledTextInput } from './styles';
import { Button } from '../../components/Button';
import { ButtonItem } from '../../components/ButtonItem';
import { ItemList } from '../../components/ItemList';

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
  'Outro'
];

export function Setor() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Setor'>>();
  
  const [showSectors, setShowSectors] = React.useState(false);

  const [selectedSector, setSelectedSector] = React.useState<string | null>(null);
  const [otherSector, setOtherSector] = React.useState('');
  const [showInput, setShowInput] = React.useState(false);

  const handlePressItem = (item: string) => {
    setSelectedSector(item);
    if (item === 'Outro') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleConfirm = () => {
    if (selectedSector === null || (selectedSector === 'Outro' && otherSector === '')) {
      alert('Por favor, selecione ou digite um setor.');
    } else {
      navigation.navigate('Quiz');
    }
  };

  const handleToggleSectors = () => {
    setShowSectors(!showSectors);
  };

  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Title>Qual é o seu setor?</Title>
      <ButtonItem title={showSectors ? "Selecione o Setor  ▲" : "Selecione o Setor  ▼"} onPress={handleToggleSectors} />
      {showSectors && <ItemList data={setores} onPressItem={handlePressItem} />}
      {showInput && 
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