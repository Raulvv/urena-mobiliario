import React, { Component } from 'react';
import ProductLine from '../ProductLine';

export default class ProductLineExpositor extends Component {
  render() {
    return (
      <section className="MainContainer-values">
        <h2>Nuestras Lineas</h2>

        <section className="MainContainer-values-list">
          <ProductLine
            title="First Value"
            description="We are amazing and you know it"
          />
          <ProductLine
            title="Second Value"
            description="We are amazing and you know it"
          />
          <ProductLine
            title="Third Value"
            description="We are amazing and you know it"
          />
        </section>
      </section>
    );
  }
}
