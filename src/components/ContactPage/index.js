import React, { Component } from 'react';
import '../../App.css';
import Header from '../Header';
import MainContainer from '../MainContainer';
import Footer from '../Footer';
import ContactInfo from '../ContactInfo';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <Header />
        <MainContainer>
          <ContactInfo />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
