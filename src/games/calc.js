import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (number1, number2, mathSign) => {
    switch (mathSign) {
        case '+': return number1 + number2;
        case '-': return number1 - number2;
        case '*': return number1 * number2;
        default: break;
    }
};

const generateQuestion = () => {
    const number1 = generateNumber(1, 100);
    const number2 = generateNumber(1, 100);
    const mathSigns = ['+', '-', '*'];
    const mathSign = mathSigns[generateNumber(0, 2)];

    const question = `${number1} ${mathSign} ${number2}`;
    const correctAnswer = calculate(number1, number2, mathSign);
    
    return [question, String(correctAnswer)];
};

export default () => {
    startGame(gameDescription, generateQuestion);
};
