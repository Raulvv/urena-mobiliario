import React, { Component } from 'react';
import ProductLine from '../ProductLine';

export default class ProductLineExpositor extends Component {
  render() {
    return (
      <section className="MainContainer-ProductLineExpositor">
        <section className="MainContainer-ProductLineExpositor-list">
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
          <div className="MainContainer-ProductLineExpositor-title">
            <h2>
                Categorias
            </h2>
          </div>
          <ProductLine
            title="Roperos"
            imageUrl={`${process.env.REACT_APP_STATIC_PATH}/SERIE ZERO/multipuesto.jpg`}
          />
        </section>
      </section>
    );
  }
}
