import React, { Component } from 'react';
import axios from 'axios';
import InputForm from '../InputForm';
import TextareaForm from '../TextareaForm';

export default class ContactForm extends Component {
  state = {
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  };

  handleSubmit(e){
    e.preventDefault();

    axios({
      method: "POST",
      url:`/api/index`,
      data: this.state
    }).then((response)=>{
      if(response.data.msg === 'fail'){
        alert("Message failed to send.")
      }

      this.resetForm();
    })
  }

  resetForm(){
    document.getElementById('contact-form').reset();
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  onCompanyChange(event) {
    this.setState({company: event.target.value});
  }

  onMessageChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div className="MainContainer-contact-form">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <InputForm label="Nombre" id="name" onChange={this.onNameChange.bind(this)} />
          <InputForm label="Empresa" id="company" onChange={this.onCompanyChange.bind(this)} />
          <InputForm label="Telefono" id="phone" onChange={this.onPhoneChange.bind(this)} />
          <InputForm label="Email" id="email" onChange={this.onEmailChange.bind(this)} type="email" />
          <TextareaForm label="Consulta" id="message" onChange={this.onMessageChange.bind(this)} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
