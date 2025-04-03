/* eslint-disable no-restricted-syntax */
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (number, step) => {
  const result = [];
  const lengthProgression = 10;
  for (let i = 0; i < lengthProgression; i += 1) {
    result.push(number + i * step);
  }
  return result;
};

const generateQuestion = () => {
  const number = generateNumber(1, 50);
  const step = generateNumber(1, 5);
  const space = generateNumber(0, 9);
  const question = generateProgression(number, step);
  const correctAnswer = question[space];
  question[space] = '..';
  return [question.join(' '), String(correctAnswer)];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
