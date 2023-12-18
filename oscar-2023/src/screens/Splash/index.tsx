import React, { useEffect } from 'react';
import { Title, Ellipse1, StyledLinearGradient } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';

const splashLogo = require('../../../assets/images/splash-logo.png');

export function Splash() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Splash'>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000); // Navega para a tela Inicio após 3 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);
  
  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Ellipse1 source={splashLogo} />
      <Title>QUIZ</Title>
    </StyledLinearGradient>
  );
}