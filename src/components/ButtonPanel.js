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

  const trick = (i) => <Button buttonName={i.text} key={i.text} clickHandler={clickHandler} />;

  const renderButtons = (a) => a.map((i) => trick(i));

  const buttonItems = buttons.map((array) => <div key={array[0].text}>{renderButtons(array)}</div>);

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
