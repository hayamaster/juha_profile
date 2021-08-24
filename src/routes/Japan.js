import React from "react";
import logo from "../images/logo.jpg";
import ImageJapan from "../components/ImageJapan";
import './Japan.css';

function Japan() {
  return (
    <div className='Home'>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome! JUHA's travelog!</h1>
      </header>
      <ImageJapan />
    </div>
  );
}

export default Japan;