import React, { Component } from 'react';
import ProductLine from '../ProductLine';

export default class ProductLineExpositor extends Component {
  generateList(numberOfItems) {
    let list = [];

    for(let i = 0; i < numberOfItems; i++) {
      list.push(
          <ProductLine
              title="LOOK"
              imageUrl={`${process.env.REACT_APP_STATIC_PATH}/SERIE ARCO/cam7_20.jpg`}
              description="Mesas sobrias y con amplia gama de acabados"
          />
      )
    }

    return list;
  }

  render() {
    return (
      <section className="ProductLineExpositor">
        <h3 className="ProductLineExpositor-title">{this.props.title}</h3>
        <section className="ProductLineExpositor-list">
          {this.generateList(this.props.numberOfItems)}
        </section>
      </section>
    );
  }
}
