import React, { Component } from 'react';
import MainInfo from '../MainInfo';

export default class MainContainer extends Component {
  render() {
    return (
      <section className="MainContainer">
        <MainInfo />
        <div style={{ border: '1px solid #0f72bf' }}></div>
        <section className="MainContainer-contact">
          <div className="MainContainer-contact-info">
            <h2>Contacto</h2>
            <p>Estamos a su disposición para cualquier consulta que deseen realizar en:</p>
            <p><span className="App-label">Oficinas fisicas: </span>Calle Eduardo Torroja, 4 - 28946 Fuenlabrada (Madrid)</p>
            <p><span className="App-label">Telefono: </span>91 690 12 27</p>
            <p><span className="App-label">Fax: </span>91 690 11 93</p>
          </div>
        </section>
      </section>
    );
  }
}
