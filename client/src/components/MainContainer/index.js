import React, { Component } from 'react';

export default class MainContainer extends Component {
  render() {
    return (
      <section className="MainContainer">
        {this.props.children}
      </section>
    );
  }
}
