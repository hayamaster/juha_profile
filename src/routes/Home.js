import React from "react";
import logo from "../images/logo.jpg";
import ImageHome from "../components/ImageHome";
import "./Home.css";

function Home() {
  return (
    <div className='Home'>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome! JUHA's travelog!</h1>
      </header>
      <ImageHome />
    </div>
  );
}

export default Home;
