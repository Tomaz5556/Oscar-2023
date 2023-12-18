import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient, StyledTextInput } from './styles';
import { Button } from '../../components/Button';
import { ItemList } from '../../components/ItemList';

const cursos = [
  'Licenciatura em Ciências Biológicas',
  'Licenciatura em Matemática',
  'Licenciatura em Química',
  'Licenciatura em Física',
  'Licenciatura em Pedagogia',
  'Bacharelado em Medicina Veterinária',
  'Bacharelado em Engenharia Florestal',
  'Bacharelado em Engenharia de Alimentos',
  'Bacharelado em Sistemas de Informação',
  'Técnico em Informática',
  'Técnico em Agropecuária',
  'Técnico em Agroindústria',
  'Outro'
];

export function Curso() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Curso'>>();
  
  const [showCourses, setShowCourses] = React.useState(false);
  
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
      alert('Por favor, selecione ou digite um curso.');
    } else {
      navigation.navigate('Quiz');
    }
  };

  const handleToggleCourses = () => {
    setShowCourses(!showCourses);
  };

  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Title>Qual é o seu curso?</Title>
      <Button title={showCourses ? "Selecione o Curso ⇧" : "Selecione o Curso ⇩"} onPress={handleToggleCourses} />
      {showCourses && <ItemList data={cursos} onPressItem={handlePressItem} />}
      {showInput && 
        <StyledTextInput 
          placeholder="Digite o curso" 
          value={otherCourse}
          onChangeText={setOtherCourse}
        />
      }
      <Button title="Confirmar" onPress={handleConfirm} />
    </StyledLinearGradient>
  );
}