import { getRandomNumber } from '../utils.js';
import getGame from '../index.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false; // Числа 0 и 1 не являются простыми
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Если число делится на i, оно составное
    }
  }

  return true;
};

const startGame = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) === true ? 'yes' : 'no';
  return [answer, question];
};

export { getGame, taskGame, startGame };
