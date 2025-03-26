import readlineSync from 'readline-sync';

const roundCount = 3;

export default (gameDescription, generateQuestion) => {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log(gameDescription);

for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer? ');
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
            return;
        }
    };
    console.log(`Congratulations, ${userName}!`)
};

