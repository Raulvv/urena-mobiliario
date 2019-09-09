import React, { Component } from 'react';

export default class ProductLine extends Component {
  render() {
    return (
      <div className="ProductLine-item">
        <div className="ProductLine-img-preview">
            <img src={this.props.imageUrl} alt=""/>
            <div className="ProductLine-item-title">
              <h3>{ this.props.title }</h3>
            </div>
        </div>
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}
