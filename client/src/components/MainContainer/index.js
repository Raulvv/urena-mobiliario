import React, { Component } from 'react';
import CustomSlider from '../CustomSlider';
import MainInfo from '../MainInfo';
import ContactInfo from '../ContactInfo';
import Separator from '../Separator';
import ValuesList from '../ValuesList';
import ProductLineExpositor from '../ProductLineExpositor';

export default class MainContainer extends Component {
  render() {
    return (
      <section className="MainContainer">
        <CustomSlider />
        <MainInfo />
        <Separator />
        <ContactInfo />
        <Separator />
        <ValuesList />
        <Separator />
        <Separator />
        <ProductLineExpositor />
      </section>
    );
  }
}
