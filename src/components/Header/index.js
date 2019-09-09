import React, { Component } from 'react';
import Nav from '../Nav';

export default class Header extends Component {
  render() {
    console.log('HOLA', process.env);
    return (
      <header className="Header-container">
        <div className="Header-logo">
          <a href="/">
            <img src={`${process.env.REACT_APP_STATIC_PATH}/logo.jpg`} alt="logo"/>
          </a>
        </div>
        <Nav />
      </header>
    );
  }
}
