import React from 'react';
import calculate from '../logic/calculate';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operationName: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total, next, operationName } = this.state;
    return (
      <main className="flex items-center justify-around">
        <h2 className="text-2xl">Let’s do some math!</h2>
        <div className="calculator">
          <Display result={total} next={next} operationName={operationName} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </main>
    );
  }
}

export default Calculator;
