import getGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const taskGame = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

const calculate = (numberOne, numberTwo, symbol) => {
  switch (symbol) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return `Unknown symbol ${symbol}`;
  }
};

const startGame = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const randomIndex = getRandomNumber(0, symbols.length - 1);
  const randomSymbol = symbols[randomIndex];
  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const result = calculate(firstNumber, secondNumber, randomSymbol);
  const answer = result.toString();
  return [answer, question];
};

export { getGame, taskGame, startGame };
