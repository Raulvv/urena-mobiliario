import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ModalCategory from "./components/ModalCategory";
import Filter from './components/Filter';
import ProductLineExpositor from './components/ProductLineExpositor';

class App extends Component {
    state = {
        categories: [
            {name: "Mesas", numberOfItems: 3},
            {name: "Roperos", numberOfItems: 1},
            {name: "Cajoneras", numberOfItems: 2},
            {name: "Archivo", numberOfItems: 2},
            {name: "Armarios", numberOfItems: 3},
        ]
    };

    renderCategories() {
        return this.state.categories.map(category => {
            console.log(this.state.categories)
            return <ProductLineExpositor key={category.name} title={category.name} numberOfItems={category.numberOfItems} />
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <MainContainer>
                    <Filter onFilter={(category, items) => {
                        const categoryObject = {
                            name: category,
                            numberOfItems: items
                        }
                        this.setState({categories: [categoryObject]})
                    }}/>
                    <section id="categories">
                        {this.renderCategories()}
                    </section>
                </MainContainer>
                <ModalCategory />
                <Footer />
            </div>
        );
    }
}

export default App;
