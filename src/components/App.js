import React from 'react';
import calculate from '../logic/calculate';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operationName: null,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total, next, operationName } = this.state;
    return (
      <>
        <Display result={total} next={next} operationName={operationName} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Display />
//       <ButtonPanel />
//     </>
//   );
// }

export default App;
