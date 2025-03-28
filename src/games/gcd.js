import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const NOD = (number1, number2) => {
  if (number2 > number1) return NOD(number2, number1);
  if (!number2) return number1;
  return NOD(number2, number1 % number2);
};

const generateQuestion = () => {
  const number1 = generateNumber(1, 100);
  const number2 = generateNumber(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = NOD(number1, number2);

  return [question, String(correctAnswer)];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
