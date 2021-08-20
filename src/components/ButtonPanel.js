import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  const buttons = [
    [
      {
        text: 'AC',
      },
      {
        text: '+/-',
      },
      {
        text: '%',
      },
      {
        text: '÷',
      },
    ],
    [
      {
        text: '7',
      },
      {
        text: '8',
      },
      {
        text: '9',
      },
      {
        text: 'X',
      },
    ],
    [
      {
        text: '4',
      },
      {
        text: '5',
      },
      {
        text: '6',
      },
      {
        text: '-',
      },
    ],
    [
      {
        text: '1',
      },
      {
        text: '2',
      },
      {
        text: '3',
      },
      {
        text: '+',
      },
    ],
    [{ text: '0' }, { text: '.' }, { text: '=' }],
  ];

  const divSty = 'h-24 flex';
  const b = (i) => {
    const wide = i === '0' ? 'w-1/2' : 'w-1/4';
    let color = '';
    switch (i) {
      case '+': case '-': case 'X': case '÷': case '=':
        color = 'bg-yellow-600';
        break;

      default:
        color = 'bg-gray-200';
        break;
    }
    return `${color} ${wide} border border-gray-300 text-2xl font-semibold`;
  };
  const t = (i) => <Button buttonName={i.text} key={i.text} st={b} clickHandler={clickHandler} />;

  const renBut = (a) => a.map((i) => t(i));

  const buttonItems = buttons.map((a) => <div key={a[0].text} className={divSty}>{renBut(a)}</div>);

  return (
    <>
      {buttonItems}
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
