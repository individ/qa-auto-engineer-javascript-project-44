import { getRandomNumber } from '../utils.js';
import getGame from '../index.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number, interval) => {
  const numbers = [];
  let member = number;
  while (numbers.length <= 10) {
    member += interval;
    numbers.push(member);
  }
  return numbers;
};

const startGame = () => {
  const firstNumber = getRandomNumber(0, 20);
  const interval = getRandomNumber(2, 10);
  const index = getRandomNumber(0, 9);
  const progression = getProgression(firstNumber, interval);
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [answer, question];
};

export default () => {
  getGame(taskGame, startGame);
};
