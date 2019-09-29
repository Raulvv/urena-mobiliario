import React, { Component } from 'react';
import ProductLine from '../ProductLine';

const translations = {
    "MESAS": [{
        name: "LOOK",
        description: "Mesas sobrias y con amplia gama de acabados"
    },{
        name: "ARCO",
        description: "Mesas de líneas suaves, minimalista y versátil con amplias posibilidades."
    },{
        name: "REUNIONES",
        description: "Mesas redondas, rectas o ampliables según las necesidades."
    }],
    "ROPEROS": [{
        name: "ROPEROS",
        description: "Armarios roperos y taquillas metálicos con posibilidad de techos inclinados o patas."
    }],
    "CAJONERAS": [{
        name: "LOOK",
        description: "Totalmente metálicas en diferentes versiones."
    },{
        name: "ARCHIVO",
        description: "Cuerpos metálicos con frentes metálicos y laminados ó totalmente construidas en melamina para armonizar con el resto del mobiliario."
    }],
    "ARCHIVO": [{
        name: "LOOK",
        description: "Archivadores con cajones completamente metálicos dotados de guias telescópicas con cierre suave. Cajones grandes para dos formatos de carpeta y cajones pequeños para fichas."
    },{
        name: "ARCHIVO",
        description: "Archivadores metálicos con guias telescópicas y frentes tanto metálicos como laminados para armonizar con el resto del mobiliario."
    }],
    "ARMARIOS": [{
        name: "LOOK",
        description: "Completamente metálicos con tirador de Zamak y cerradura de falleba."
    },{
        name: "ARCHIVO",
        description: "Cuerpos metálicos con diferentes versiones en las puertas; metal, melamina, cristal enmarcado o abatible. Cierres de falleba."
    },{
        name: "PERSIANA",
        description: "Cuerpos metálicos con puertas de persiana correderas con topes metálicos sobre carril de pvc con deslizamiento suave. Dotados de cerradura."
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
