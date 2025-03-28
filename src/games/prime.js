import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return 'no';
    }
  divider += 1;
  }
  return 'yes';
};

const generateQuestion = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question);
  return [question, String(correctAnswer)];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
