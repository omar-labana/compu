import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne).plus(numberTwo);
    case '-':
      return Big(numberOne).minus(numberTwo);
    case '*':
      return Big(numberOne).times(numberTwo);
    case '/':
      return Big(numberOne).div(numberTwo);
    case '%':
      return Big(numberOne).mod(numberTwo);
    default:
      return 'Syntax Error';
  }
};

export default operate;
