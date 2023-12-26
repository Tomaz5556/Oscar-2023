import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions } from 'react-native';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';
import { Filme } from '../Filme';
import theme from '../../global/styles/theme';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

const QUESTIONS = [
  {
    question: 'Pronto para chorar?',
    answers: ['Já peguei o lenço', 'Nada de filme muito meloso'],
    next: [1, 2],
    filme: [null, null]
  },
  {
    question: 'Qual relacionamento é mais complicado para você?',
    answers: ['Família', 'Amizade'],
    next: [3, 4],
    filme: [null, null]
  },
  {
    question: 'Que tal um bando de ricaços malucos?',
    answers: ['Parece divertido', 'Parece chato'],
    next: [5, 6],
    filme: [null, null]
  },
  {
    question: 'Por que é complicado?',
    answers: ['Tenho que resolver tudo', 'Me sinto diferente'],
    next: [7, 8],
    filme: [null, null]
  },
  {
    question: 'Como você sabe quem é seu melhor amigo?',
    answers: ['Bebendo todos os dias', 'Situações de vida e morte'],
    next: [null, null],
    filme: [0, 1]
  },
  {
    question: 'E com assassinatos?',
    answers: ['Não. Apenas sexo, drogas e rock\'n roll', 'Sim!'],
    next: [null, 9],
    filme: [2, null]
  },
  {
    question: 'Gosta de épicos?',
    answers: ['Não! Prefiro histórias mais pessoais', 'Gosto de grandes produções'],
    next: [null, 10],
    filme: [3, null]
  },
  {
    question: 'Qual é a ameaça que você enfrenta?',
    answers: ['Distância dos filhos', 'Opressão Religiosa'],
    next: [11, null],
    filme: [null, 4]
  },
  {
    question: 'Você encontra soluções para seus desafios?',
    answers: ['Não muito', 'Sim, felizmente'],
    next: [null, 12],
    filme: [5, null]
  },
  {
    question: 'Quem você quer ridicularizar?',
    answers: ['Barões da tecnologia', 'Influencers'],
    next: [null, null],
    filme: [6, 7]
  },
  {
    question: 'Que tipo de emoção você quer?',
    answers: ['Alto astral', 'Desespero'],
    next: [null, null],
    filme: [8, 9]
  },
  {
    question: 'Qual comida te faz se sentir bem?',
    answers: ['Bagel de tudo', 'Pizza'],
    next: [null, null],
    filme: [10, 11]
  },
  {
    question: 'Gosta de animação?',
    answers: ['Sim', 'Não'],
    next: [null, null],
    filme: [12, 13]
  },
];

const bansheesImg = require('../../../assets/images/banshees.jpg'); 
const topgunImg = require ('../../../assets/images/topgun.jpg');
const babiloniaImg = require ('../../../assets/images/babilonia.jpg');
const tarImg = require ('../../../assets/images/tar.jpg');
const entremulheresImg = require ('../../../assets/images/entremulheres.jpg');
const elvisImg = require ('../../../assets/images/elvis.jpg');
const glassonionImg = require ('../../../assets/images/glassonion.jpg');
const trianguloImg = require ('../../../assets/images/triangulo.jpg');
const avatarImg = require ('../../../assets/images/avatar.jpg');
const nadadenovoImg = require ('../../../assets/images/nadadenovo.jpg');
const tudoemtodoImg = require ('../../../assets/images/tudoemtodo.jpg');
const baleiaImg = require ('../../../assets/images/baleia.jpg');
const pinoquioImg = require ('../../../assets/images/pinoquio.jpg');
const fabelmansImg = require ('../../../assets/images/fabelmans.jpg');

const FILMES = [
  {
    nome: 'Os Banshees de Inisherin',
    imagem: bansheesImg,
    descricao: 'Estrelado por Colin Farrell e Brendan Gleeson, este filme ambientado na Irlanda dos anos 1920 é sobre dois melhores amigos que chegam a um impasse quando um deles decide que não quer mais ser amigo do outro.',
    diretor: 'Martin McDonagh'
  },
  {
    nome: 'Top Gun: Maverick',
    imagem: topgunImg,
    descricao: 'Tom Cruise e Val Kilmer reprisam seus papéis de Top Gun de 1986, com Maverick lutando em uma posição relativamente humilde de piloto de testes, enquanto Iceman subiu para comandante da frota.',
    diretor: 'Joseph Kosinski'
  },
  {
    nome: 'Babilônia',
    imagem: babiloniaImg,
    descricao: 'Se La La Land mostra uma visão romantizada da indústria cinematográfica, Babilônia exibe o lado feio. Com um elenco de estrelas liderado por Brad Pitt e Margot Robbie, o filme narra a ascensão e queda de vários personagens nos primeiros anos de Hollywood.',
    diretor: 'Damien Chazelle'
  },
  {
    nome: 'Tár',
    imagem: tarImg,
    descricao: 'Neste thriller psicológico, uma compositora e maestrina no topo de seu jogo se envolve em escândalos. Ela entra em parafuso quando começa a ouvir sons estranhos e a ter pesadelos.',
    diretor: 'Todd Field'
  },
  {
    nome: 'Entre Mulheres',
    imagem: entremulheresImg,
    descricao: 'É baseado no livro de Miriam Toews e inspirado em eventos reais ocorridos na colônia de Manitoba, na Bolívia. A história segue as mulheres de uma comunidade religiosa que lutam para conciliar sua fé com a realidade chocante que descobrem sobre os homens da comunidade.',
    diretor: 'Sarah Polley'
  },
  {
    nome: 'Elvis',
    imagem: elvisImg,
    descricao: 'Esta cinebiografia sobre Elvis Presley é contada a partir da perspectiva de seu empresário e segue a vida do rei desde sua infância no Mississippi até seu estrelato em meio a movimentos sociais da década de 1960 e seus últimos anos, quando ele se esforçou para ser lembrado.',
    diretor: 'Baz Luhrmann'
  },
  {
    nome: 'Glass Onion: Um Mistério Knives Out',
    imagem: glassonionImg,
    descricao: 'O ricaço Miles Bron convida seus amigos excêntricos para sua ilha para jogar um jogo de detetive. Mas um assassinato real é cometido e as coisas saem do controle. Todos são suspeitos e a morte pode vir de onde se menos imagina.',
    diretor: 'Rian Johnson'
  },
  {
    nome: 'Triângulo da Tristeza',
    imagem: trianguloImg,
    descricao: 'Esta comédia negra satírica segue as provações dos passageiros ricos de um iate de luxo e da tripulação que deve atender aos seus caprichos. Uma tempestade violenta é apenas a primeira das calamidades que testam as divisões de classe a bordo.',
    diretor: 'Ruben Östlund'
  },
  {
    nome: 'Avatar: O Caminho da Água',
    imagem: avatarImg,
    descricao: 'Na sequência de Avatar de 2009, Jake Sully é chefe do clã Omatikaya e cria filhos com Neytiri. Sob ameaça, eles se mudam e se integram a um clã à beira-mar.',
    diretor: 'James Cameron'
  },
  {
    nome: 'Nada de Novo no Front',
    imagem: nadadenovoImg,
    descricao: 'O adolescente Paul é convocado para atuar na linha de frente da Primeira Guerra Mundial. O jovem começa seu serviço militar de forma idealista e entusiasmada, mas logo é confrontado pela dura realidade do combate.',
    diretor: 'Edward Berger'
  },
  {
    nome: 'Tudo em Todo Lugar ao mesmo Tempo',
    imagem: tudoemtodoImg,
    descricao: 'Uma ruptura interdimensional bagunça a realidade e uma inesperada heroína precisa usar seus novos poderes para lutar contra os perigos bizarros do multiverso.',
    diretor: 'Daniel Kwan e Daniel Scheinert'
  },
  {
    nome: 'A Baleia',
    imagem: baleiaImg,
    descricao: 'Brendan Fraser interpreta um professor de escrita recluso e severamente obeso que tenta se reconectar com sua filha distante.',
    diretor: 'Darren Aronofsky'
  },
  {
    nome: 'Pinóquio de Guillermo del Toro',
    imagem: pinoquioImg,
    descricao: 'Como poderíamos esperar de Guillermo del Toro, este filme de animação em stop-motion traz escuridão e fantasia para a conhecida história de um fantoche de madeira que ganha vida como o filho de seu criador, Geppetto.',
    diretor: 'Guillermo del Toro'
  },
  {
    nome: 'Os Fabelmans',
    imagem: fabelmansImg,
    descricao: 'Vagamente baseado nas experiências adolescentes do diretor Steven Spielberg, The Fabelmans segue o aspirante a cineasta adolescente Sammy Fabelman e a descoberta de uma revelação chocante sobre sua família disfuncional.',
    diretor: 'Steven Spielberg'
  }
];

interface Filme {
  nome: string;
  imagem: any;
  descricao: string;
  diretor: string;
}

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<Filme | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const offset = useSharedValue(Dimensions.get('window').width);

  const handleAnswer = (answerIndex: number) => {
    const nextQuestionIndex = currentQuestion.next[answerIndex];
    if (nextQuestionIndex !== null) {
      setHistory([...history, currentQuestionIndex]);
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      const movieIndex = currentQuestion.filme[answerIndex];
      if (movieIndex !== null) {
        setSelectedMovie(FILMES[movieIndex]);
      }
    }
  };
  
  const handleBack = () => {
    if (history.length > 0) {
      const lastQuestionIndex = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentQuestionIndex(lastQuestionIndex);
    }
  };

  useEffect(() => {
    const backAction = () => {
      handleBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [history]);

  useEffect(() => {
    offset.value = Dimensions.get('window').width; // Adicione esta linha
    offset.value = withTiming(0, {
      duration: 1000,
      easing: Easing.ease,
    });
  }, [currentQuestionIndex, selectedMovie]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  return (
    <StyledLinearGradient
      colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {selectedMovie ? (
        <Animated.View style={animatedStyles}>
          <Filme filme={selectedMovie} />
        </Animated.View>
      ) : (
        <>
          <Animated.View style={animatedStyles}>
            <Title>{currentQuestion.question}</Title>
          </Animated.View>
          {currentQuestion.answers.map((answer, index) => (
            <Animated.View style={animatedStyles} key={index}>
              <Button title={answer} onPress={() => handleAnswer(index)} />
            </Animated.View>
          ))}
        </>
      )}
    </StyledLinearGradient>
  );
}