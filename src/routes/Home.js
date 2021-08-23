import React from "react";
import logo from "../images/logo.jpg";
import Image from "../components/Image";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="logo" />
          <h1>Welcome! JUHA's travelog!</h1>
        </header>
        <Image />
      </div>
    );
  }
}

export default Home;
