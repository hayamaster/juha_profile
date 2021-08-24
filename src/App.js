import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Japan from './routes/Japan';
import Home from './routes/Home';
import About from './routes/About';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="app-box">
        <Menu />
        <div className='style'>
          <Switch>
            <Route path='/' exact={true}>{Home}</Route>
            <Route className='japan' path="/japan">{Japan}</Route>
            <Route path='/about'>{About}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;