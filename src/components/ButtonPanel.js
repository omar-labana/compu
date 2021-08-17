import React from 'react';
import Button from './Button';

function ButtonPanel() {
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
        text: '2',
      },
      {
        text: '7',
      },
      {
        text: '8',
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
    [
      {
        text: '0',
      },
      {
        text: '.',
      },
      {
        text: '=',
      },
    ],
  ];
  const buttonItems = buttons.map((array) => <div>{array.map((item) => <Button buttonName={item.text} key={item.text} />)}</div>);

  return (
    <>
      {buttonItems}
    </>
  );
}

export default ButtonPanel;
