import axios from 'axios';
import React, { Component } from 'react';
import MainInfo from '../MainInfo';

export default class MainContainer extends Component {
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    axios({
      method: "POST",
      url:"http://localhost:5000/api/send_email",
      data: {
        name: name,
        company: company,
        phone: phone,
        email: email,
        message: message
      }
    }).then((response)=>{
      console.log({response});
      if (response.data.msg === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.msg === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    document.getElementById('contact-form').reset();
  }

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
          <div>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label>Empresa</label>
                <input type="text" className="form-control" id="company" />
            </div>
            <div className="form-group">
                <label>Telefono</label>
                <input type="phone" className="form-control" id="phone" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label>Consulta</label>
                <textarea className="form-control" rows="5" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </section>
      </section>
    );
  }
}
