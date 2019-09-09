import React, { Component } from 'react';
import ProductLine from '../ProductLine';

export default class ProductLineExpositor extends Component {
  render() {
    return (
      <section id="categories" className="ProductLineExpositor">
        <section className="ProductLineExpositor-list">
          <ProductLine
            title="Mesas"
            imageUrl={`${process.env.REACT_APP_STATIC_PATH}/SERIE ARCO/cam7_20.jpg`}
          />
          <ProductLine
            title="Cajoneras"
            imageUrl={`${process.env.REACT_APP_STATIC_PATH}/SERIE LOOK/Ureña_Pag2.jpg`}
          />
          <ProductLine
            title="Armarios"
            imageUrl={`${process.env.REACT_APP_STATIC_PATH}/SERIE ZERO/multipuesto.jpg`}
          />
          <ProductLine
            title="Archivo"
            imageUrl={`${process.env.REACT_APP_STATIC_PATH}/SERIE ZERO/multipuesto.jpg`}
          />
          <ProductLine
            title="Roperos"
            imageUrl={`${process.env.REACT_APP_STATIC_PATH}/SERIE ZERO/multipuesto.jpg`}
          />
        </section>
      </section>
    );
  }
}
