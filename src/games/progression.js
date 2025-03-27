import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (number, step) => {
    let result = [number];
    for (let i = 1; i <= 10; i += 1) {
        number = number + step;
        result.push(number);
    }
    return result;
};

const generateQuestion = () => {
    const number = generateNumber(1, 50);
    const step = generateNumber(1, 5);
    const space = generateNumber(1, 10);
    const progression = generateProgression(number, step);
    const question = [ ];
    for (const num of progression) {
        if (num === progression[space]) {
            const newNum = '..';
            question.push(newNum);
        } else {
            question.push(num);
        }
    }
    const correctAnswer = progression[space];
    return [question.join(' '), String(correctAnswer)];
};

export default () => {
    startGame(gameDescription, generateQuestion)
};