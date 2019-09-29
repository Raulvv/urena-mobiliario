import React, { Component } from 'react';
import ProductLine from '../ProductLine';

const translations = {
    "MESAS": [{
        name: "LOOK",
        description: "Mesas sobrias y con amplia gama de acabados"
    },{
        name: "ARCO",
        description: "Mesas sobrias y con amplia gama de acabados"
    },{
        name: "ZERO",
        description: "Mesas sobrias y con amplia gama de acabados"
    }],
    "ROPEROS": [{
        name: "ROPEROS",
        description: "Roperos"
    }],
    "CAJONERAS": [{
        name: "LOOK",
        description: "Mesas sobrias y con amplia gama de acabados"
    },{
        name: "ARCO",
        description: "Mesas sobrias y con amplia gama de acabados"
    }],
    "ARCHIVO": [{
        name: "LOOK",
        description: "Mesas sobrias y con amplia gama de acabados"
    },{
        name: "ARCO",
        description: "Mesas sobrias y con amplia gama de acabados"
    }],
    "ARMARIOS": [{
        name: "LOOK",
        description: "Mesas sobrias y con amplia gama de acabados"
    },{
        name: "ARCO",
        description: "Mesas sobrias y con amplia gama de acabados"
    },{
        name: "ZERO",
        description: "Mesas sobrias y con amplia gama de acabados"
    }],
};

export default class ProductLineExpositor extends Component {
  generateList(numberOfItems) {
    let list = [];

    for(let i = 0; i < numberOfItems; i++) {
      let line = translations[this.props.title.toUpperCase()][i];
      list.push(
          <ProductLine
              key={line.name}
              title={line.name}
              imageUrl={`${process.env.REACT_APP_STATIC_PATH}/${line.name.toLowerCase()}/${line.name.toLowerCase()}_1.jpg`}
              description={line.description}
              onShowModal={this.props.onShowModal}
          />
      );
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
