import React, { Component } from 'react';

export default class ProductLine extends Component {
  render() {
    return (
      <div className="MainContainer-values-item">
        <h3>{ this.props.title }</h3>
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}
