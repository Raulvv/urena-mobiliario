import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import CustomSlider from './components/CustomSlider';
import Separator from './components/Separator';
import ValuesList from './components/ValuesList';
import ProductLineExpositor from './components/ProductLineExpositor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer>
          <CustomSlider />
          <Separator />
          <ValuesList />
          <Separator />
          <Separator />
          <ProductLineExpositor />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
