import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import CustomSlider from './components/CustomSlider';
import Separator from './components/Separator';
import ProductLineExpositor from './components/ProductLineExpositor';
import ModalCategory from "./components/ModalCategory";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer>
          <CustomSlider />
          <Separator />
          <ProductLineExpositor />
        </MainContainer>
        <ModalCategory />
        <Footer />
      </div>
    );
  }
}

export default App;
