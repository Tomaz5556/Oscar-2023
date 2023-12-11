import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { 
  useFonts, 
  Outfit_400Regular,
  Outfit_700Bold
} from '@expo-google-fonts/outfit';

import { Loading } from './src/components/Loading';
import { Splash } from './src/screens/Splash';
import { Home } from './src/screens/Home';
import React from 'react';
import theme from './src/global/styles/theme';

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
