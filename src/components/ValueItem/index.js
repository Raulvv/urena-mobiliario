import React, { Component } from 'react';

export default class ValueItem extends Component {
  render() {
    return (
      <div className="MainContainer-values-item">
        <img src={ this.props.icon } alt={ this.props.title } />
        <h3>{ this.props.title }</h3>
        <p>
          {this.props.content}
        </p>
      </div>
    );
  }
}
