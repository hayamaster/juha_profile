import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Menu() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.Name}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menu;