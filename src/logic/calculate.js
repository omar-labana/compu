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
    case '=':
      if (!total || !next || !operationName) return 0;
      total = (total + operationName + next).toString();
      break;
    case '+': case '-': case '*': case '/': case '%':
      total = operate(total, next, operationName);
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
      if (!total) total = buttonName;
      if (total && !next) next = buttonName;
      break;
    default:
      total = 'Syntax Error';
  }
  return actionData;
};

export default calculate;
