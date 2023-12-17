import React, { useState } from 'react';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';

const QUESTIONS = [
  {
    question: 'Pronto para chorar?',
    answers: ['Já peguei o lenço', 'Nada de filme muito meloso'],
    next: [1, 2],
  },
  {
    question: 'Qual relacionamento mais é mais complicado para você?',
    answers: ['Família', 'Amizade'],
    next: [3, 4],
  },
  {
    question: 'Que tal um bando de ricaços malucos?',
    answers: ['Parece divertido', 'Parece chato'],
    next: [5, 6],
  },
  {
    question: 'Por que é complicado?',
    answers: ['Tenho que resolver tudo', 'Me sinto diferente'],
    next: [7, 8],
  },
  {
    question: 'Como você sabe quem é seu melhor amigo?',
    answers: ['Bebendo todos os dias', 'Situações de vida e morte'],
    next: [null, null],
  },
  {
    question: 'E com assassinatos?',
    answers: ['Não. Apenas sexo, drogas e rock\'n roll', 'Sim!'],
    next: [null, 9],
  },
  {
    question: 'Gosta de épicos?',
    answers: ['Não! Prefiro histórias mais pessoais', 'Gosto de grandes produções'],
    next: [null, 10],
  },
  {
    question: 'Qual é a ameaça que você enfrenta?',
    answers: ['Distância dos filhos', 'Opressão Religiosa'],
    next: [11, null],
  },
  {
    question: 'Você encontra soluções para seus desafios?',
    answers: ['Não muito', 'Sim, felizmente'],
    next: [null, 12],
  },
  {
    question: 'Quem você quer ridicularizar?',
    answers: ['Barões da tecnologia', 'Influencers'],
    next: [null, null],
  },
  {
    question: 'Que tipo de emoção você quer?',
    answers: ['Alto astral', 'Desespero'],
    next: [null, null],
  },
  {
    question: 'Qual comida te faz se sentir bem?',
    answers: ['Bagel de tudo', 'Pizza'],
    next: [null, null],
  },
  {
    question: 'Gosta de animação?',
    answers: ['Sim', 'Não'],
    next: [null, null],
  },
];

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    const nextQuestionIndex = currentQuestion.next[answerIndex];
    if (nextQuestionIndex !== null) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Aqui você pode lidar com o final do quiz.
    }
  };

  return (
    <StyledLinearGradient
      colors={['#000000', '#a00000', '#ff0000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Title>{currentQuestion.question}</Title>
      {currentQuestion.answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => handleAnswer(index)} />
      ))}
    </StyledLinearGradient>
  );
}