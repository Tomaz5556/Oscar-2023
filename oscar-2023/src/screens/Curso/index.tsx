import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient, StyledTextInput } from './styles';
import { Button } from '../../components/Button';
import { ButtonItem } from '../../components/ButtonItem';
import { ItemList } from '../../components/ItemList';
import { storeData } from '../../store';
import theme from '../../global/styles/theme';

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
  'Outro: Qual?'
];

export function Curso() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Curso'>>();

  const [showCourses, setShowCourses] = React.useState(false);

  const [selectedCourse, setSelectedCourse] = React.useState<string | null>(null);
  const [otherCourse, setOtherCourse] = React.useState('');
  const [showInput, setShowInput] = React.useState(false);

  const handlePressItem = (item: string) => {
    setSelectedCourse(item);
    if (item === 'Outro: Qual?') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleConfirm = async () => {
    if (selectedCourse === null || (selectedCourse === 'Outro: Qual?' && otherCourse === '')) {
      Alert.alert('Erro', 'Por favor, selecione ou digite um curso', [{ text: 'OK' }]);
    } else {
      const courseToStore = selectedCourse === 'Outro: Qual?' ? otherCourse : selectedCourse;
      await storeData('curso', courseToStore);
      navigation.navigate('Quiz');
    }
  };  

  const handleToggleCourses = () => {
    setShowCourses(!showCourses);
    setShowInput(false);
  };

  return (
    <StyledLinearGradient
      colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Title>Qual é o seu curso?</Title>
      <ButtonItem title={showCourses ? "Selecione o Curso   ▲" : "Selecione o Curso   ▼"} onPress={handleToggleCourses} />
      {showCourses && <ItemList data={cursos} onPressItem={handlePressItem} />}
      {showCourses && showInput && selectedCourse === 'Outro: Qual?' &&
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