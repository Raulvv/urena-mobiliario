import React, { Component } from 'react';
import axios from 'axios';
import InputForm from '../InputForm';
import TextareaForm from '../TextareaForm';

export default class ContactForm extends Component {
  state = {
    inputValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    }
  };

  handleSubmit(e){
    e.preventDefault();

    axios({
      method: "POST",
      url:`/api/mailer`,
      data: this.state.inputValues
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

  onInputChange(event) {
    this.setState({
      inputValues: {
        [event.target.id]: event.target.value
      }
    });
  }

  render() {
    return (
      <div className="MainContainer-contact-form">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <InputForm label="Nombre" id="name" onChange={this.onInputChange.bind(this)} />
          <InputForm label="Empresa" id="company" onChange={this.onInputChange.bind(this)} />
          <InputForm label="Telefono" id="phone" onChange={this.onInputChange.bind(this)} />
          <InputForm label="Email" id="email" onChange={this.onInputChange.bind(this)} type="email" />
          <TextareaForm label="Consulta" id="message" onChange={this.onInputChange.bind(this)} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
