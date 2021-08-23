import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Japan from './routes/Japan';
import Home from './routes/Home';
import Menu from './components/Menu';

function App() {
  return (
    <HashRouter>
      <Menu />
      <Route path='/' exact={true} component={Home} />
      <Route path="/japan" component={Japan} />
    </HashRouter>
  );
}

export default App;