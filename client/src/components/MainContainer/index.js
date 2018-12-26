import React, { Component } from 'react';
import MainInfo from '../MainInfo';
import ContactInfo from '../ContactInfo';
import Separator from '../Separator';
import ValuesList from '../ValuesList';
import ProductLineExpositor from '../ProductLineExpositor';

export default class MainContainer extends Component {
  render() {
    return (
      <section className="MainContainer">
        <MainInfo />
        <Separator />
        <ContactInfo />
        <Separator />
        <ValuesList />
        <Separator />
        <ProductLineExpositor />
      </section>
    );
  }
}
