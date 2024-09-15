import getGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const gcd = (numberOne, numberTwo) => {
  const stack = [];
  let divisor = 1;
  while (divisor <= numberOne && divisor <= numberTwo) {
    if (numberOne % divisor === 0 && numberTwo % divisor === 0) {
      stack.push(divisor);
    }
    divisor += 1;
  }
  return stack.pop();
};

const startGame = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const result = gcd(firstNumber, secondNumber);
  const answer = result.toString();
  return [answer, question];
};

export default () => {
  getGame(taskGame, startGame);
};
