import operate from './operate';

const calculate = (actionData, buttonName) => {
  let {
    total,
    next,
    operationName,
  } = actionData;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operationName = null;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '.':
      total = `${total}.`;
      break;
    case '+': case '-': case '*': case '/': case '%':
      operationName = buttonName;
      next = '';
      break;
    case '=':
      total = operate(total, next, operationName);
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
      next = next ? next += buttonName : buttonName;
      total = operationName ? total : next;
      break;
    default:
      total = 'Syntax Error';
  }

  if (total) {
    total = total.toString();
  }
  if (next) {
    next = next.toString();
  }
  if (operationName) {
    operationName = operationName.toString();
  }

  return {
    total,
    next,
    operationName,
  };
};

export default calculate;
