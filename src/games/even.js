import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const whatCorrectAnswer = (num) => 
  (num % 2 === 0) ? 'yes' : 'no';

const isEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = whatCorrectAnswer(randomNumber);
    const userAnswer = readlineSync.question('Your Answer? ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { isEven };
