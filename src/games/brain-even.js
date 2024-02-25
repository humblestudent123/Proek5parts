import readlineSync, { question } from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const num = Math.floor(Math.random() * 100 + 1);
  console.log(`Question: ${num}`);
  //const AnswerToQuestion = readlineSync.question('Your answer: ');
  const AnswerToQuestion = readlineSync.question (), {
    console.log(AnswerToQuestion);
    const QuestionToAnswer = readlineSync.question()
    console.log(QuestionToAnswer)
}
  
  
};

