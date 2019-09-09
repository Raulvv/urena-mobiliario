import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ModalCategory from "./components/ModalCategory";
import Filter from './components/Filter';
import ProductLineExpositor from './components/ProductLineExpositor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer>
            <Filter />
            <section id="categories">
                <ProductLineExpositor title={"Mesas"} numberOfItems={3} />
                <ProductLineExpositor title={"Roperos"} numberOfItems={1} />
                <ProductLineExpositor title={"Cajoneras"} numberOfItems={2} />
                <ProductLineExpositor title={"Archivo"} numberOfItems={2} />
                <ProductLineExpositor title={"Armarios"} numberOfItems={3} />
            </section>
        </MainContainer>
        <ModalCategory />
        <Footer />
      </div>
    );
  }
}

export default App;
