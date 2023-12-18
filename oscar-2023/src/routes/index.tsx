import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Idade } from '../screens/Idade';
import { Pessoa } from '../screens/Pessoa';
import { Curso } from '../screens/Curso';
import { Setor } from '../screens/Setor';
import { Quiz } from '../screens/Quiz';
import { Filme } from '../screens/Filme';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Idade: undefined;
  Pessoa: undefined;
  Curso: undefined;
  Setor: undefined;
  Quiz: undefined;
  Filme: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Idade" component={Idade} options={{ headerShown: false }} />
      <Stack.Screen name="Pessoa" component={Pessoa} options={{ headerShown: false }} />
      <Stack.Screen name="Curso" component={Curso} options={{ headerShown: false }} />
      <Stack.Screen name="Setor" component={Setor} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      <Stack.Screen name="Filme" component={Filme} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}