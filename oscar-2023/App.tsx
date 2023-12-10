import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import { 
  useFonts, 
  Outfit_400Regular,
  Outfit_700Bold
} from '@expo-google-fonts/outfit';

import { Splash } from './src/screens/Splash';
import { Loading } from './src/components/Loading';
import React from 'react';
import theme from './src/global/styles/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold
  });

  if (!fontsLoaded) {
    return <Loading/>;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Splash />
    </ThemeProvider>
  );
}
