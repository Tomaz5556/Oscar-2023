import React from 'react';
import { TextInput } from 'react-native';
import { Title, StyledLinearGradient } from './styles';
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
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handlePressItem = (item: string) => {
    if (item === 'Outro') {
      // Permita que o usuário digite o curso
    } else {
      setSelectedCourse(item);
    }
  };

  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Title>Qual é o seu curso?</Title>
      <ItemList data={cursos} onPressItem={handlePressItem} />
      {selectedCourse === 'Outro' && <TextInput placeholder="Digite o curso" />}
      <Button title="Confirmar" onPress={() => {}} />
    </StyledLinearGradient>
  );
}