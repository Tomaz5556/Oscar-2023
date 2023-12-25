import React, { useEffect } from 'react';
import { Title, SplashImg, StyledLinearGradient } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import theme from '../../global/styles/theme';

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
      colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SplashImg source={splashLogo} />
      <Title>QUIZ</Title>
    </StyledLinearGradient>
  );
}