import React, { Component } from 'react';
import ContactForm from '../ContactForm';

export default class ContactInfo extends Component {
  render() {
    return (
      <section className="MainContainer-contact">
        <div className="MainContainer-contact-info">
          <h2>Contacto</h2>
          <p>Estamos a su disposición para cualquier consulta que deseen realizar en:</p>
          <p><span className="App-label">Oficinas: </span>Calle Eduardo Torroja, 4 - 28946 Fuenlabrada (Madrid)</p>
          <p><span className="App-label">Telefono: </span>91 690 12 27</p>
          <p><span className="App-label">Fax: </span>91 690 11 93</p>
        </div>
        <ContactForm />
      </section>
    );
  }
}
