import getGame from '../index.js';
import { getRandomNumber } from '../utils.js';
import { isEvenNumber } from '../utils.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  const question = getRandomNumber(1, 50);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [answer, question];
};

export { getGame, taskGame, startGame };
