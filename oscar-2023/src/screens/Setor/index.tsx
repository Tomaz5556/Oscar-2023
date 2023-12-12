import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Title, StyledLinearGradient, StyledTextInput } from './styles';
import { Button } from '../../components/Button';
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
  const navigation = useNavigation();
  
  const [selectedCourse, setSelectedCourse] = React.useState<string | null>(null);
  const [otherCourse, setOtherCourse] = React.useState('');
  const [showInput, setShowInput] = React.useState(false);

  const handlePressItem = (item: string) => {
    setSelectedCourse(item);
    if (item === 'Outro') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleConfirm = () => {
    if (selectedCourse === null || (selectedCourse === 'Outro' && otherCourse === '')) {
      alert('Por favor, selecione ou digite um setor.');
    } else {
      navigation.navigate('Quiz');
    }
  };

  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Title>Qual é o seu setor?</Title>
      <ItemList data={setores} onPressItem={handlePressItem} />
      {showInput && 
        <StyledTextInput 
          placeholder="Digite o setor" 
          value={otherCourse}
          onChangeText={setOtherCourse}
        />
      }
      <Button title="Confirmar" onPress={handleConfirm} />
    </StyledLinearGradient>
  );
}