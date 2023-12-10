import React from 'react';
import { Container, Title, Ellipse1, OscarImg } from './styles';

// Importe as imagens aqui
const splashBackground = require('./splash-background.jpg');
const splashLogo = require('./splash-logo.png');

export function Splash() {
  return (
    <Container>
      <OscarImg source={splashBackground} />
      <Ellipse1 source={splashLogo} />
      <Title>QUIZ</Title>
    </Container>
  );
}