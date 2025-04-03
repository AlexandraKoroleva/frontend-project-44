import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const whatCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateQuestion = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = whatCorrectAnswer(question);
  return [question, String(correctAnswer)];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
