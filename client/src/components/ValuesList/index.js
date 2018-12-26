import React, { Component } from 'react';
import ValueItem from '../ValueItem';

export default class ValuesList extends Component {
  render() {
    return (
      <section className="MainContainer-values">
        <h2>Nuestros Valores</h2>
        <section className="MainContainer-values-list">
          <ValueItem
            title="First Value"
            icon="images/icon1.png"
            content="We are amazing and you know it"
          />
          <ValueItem
            title="Second Value"
            icon="images/icon2.png"
            content="We are amazing and you know it"
          />
          <ValueItem
            title="Third Value"
            icon="images/icon3.png"
            content="We are amazing and you know it"
          />
        </section>
      </section>
    );
  }
}
