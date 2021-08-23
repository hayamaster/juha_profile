import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/japan'>Japan</Link>
    </div>
  );
}

export default Menu;