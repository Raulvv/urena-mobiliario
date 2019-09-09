import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav-container">
        <div className="Nav-item">
          <a href="/contact"><span>Contactanos</span></a>
        </div>
      </nav>
    );
  }
}
