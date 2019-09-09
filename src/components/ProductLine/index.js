import React, { Component } from 'react';
import $ from 'jquery';

export default class ProductLine extends Component {
    onSelectCategory () {
        $('.ModalCategory-wrapper').fadeIn();
    }
  render() {
    return (
      <div className="ProductLine-item" onClick={this.onSelectCategory}>
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
