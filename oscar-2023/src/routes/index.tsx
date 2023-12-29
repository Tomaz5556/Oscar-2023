import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Idade } from '../screens/Idade';
import { Pessoa } from '../screens/Pessoa';
import { Curso } from '../screens/Curso';
import { Setor } from '../screens/Setor';
import { Quiz } from '../screens/Quiz';

export type RootStackParamList = {
  Home: undefined;
  Idade: undefined;
  Pessoa: undefined;
  Curso: undefined;
  Setor: undefined;
  Quiz: undefined;
  Filme: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Idade" component={Idade} />
      <Stack.Screen name="Pessoa" component={Pessoa} />
      <Stack.Screen name="Curso" component={Curso} />
      <Stack.Screen name="Setor" component={Setor} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}
