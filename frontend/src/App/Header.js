import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="topnav">
        <Link to="/">
          <img className="logo" src={logo} height="100%" alt=""/>
        </Link>
        <a style={{"color": "#FFFFFF"}} href="https://github.com/MycroftAI/mimic-recording-studio">Mimic Recording Studio</a>
      </div>
    );
  }
}

export default Header;
