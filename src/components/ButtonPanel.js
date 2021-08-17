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
    [{ text: '0' }, { text: '.' }, { text: '=' }],
  ];
  const renderButtons = (array) => array.map((i) => <Button buttonName={i.text} key={i.text} />);

  const buttonItems = buttons.map((array) => <div key={array[0].text}>{renderButtons(array)}</div>);

  return (
    <>
      {buttonItems}
    </>
  );
}

export default ButtonPanel;
