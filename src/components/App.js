import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

// const App = () => (
//   <>
//     <BrowserRouter>
//       <Header />
//       <Switch>
//         <Route path="/" component={Calculator} />
//         <Route path="/calculator" component={Calculator} />
//         <Route path="/quote" component={Quote} />
//       </Switch>
//     </BrowserRouter>
//   </>
// );

export default App;
