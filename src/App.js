import React from 'react';
import logo from './images/logo.jpg';
import Image from './Image';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="logo" />
          <h1>Welcome! JUHA's travel blog!</h1>
        </header>
        <Image />
      </div>
    )
  }
}

export default App;
