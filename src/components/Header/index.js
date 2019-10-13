import React, { Component } from 'react';
import Nav from '../Nav';

export default class Header extends Component {
  render() {
    return (
      <header className="Header-container">
        <div className="Header-logo">
          <a href="/">
            <img src={`${process.env.REACT_APP_STATIC_PATH}/logo2.jpg`} alt="logo"/>
          </a>
        </div>
        <Nav />
      </header>
    );
  }
}
