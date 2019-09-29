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
        ],
        slides: [],
        selectedLine: ""
    };

    renderCategories() {
        return this.state.categories.map(category => {
            return <ProductLineExpositor
                key={category.name}
                title={category.name}
                numberOfItems={category.numberOfItems}
                onShowModal={(lineName) => this.onShowModal(lineName)}
            />
        })
    }

    onShowModal(lineName) {
        const categoryPhotosMap = {
            "look": 10,
            "especial": 1,
            "armario_persiana": 7,
            "zero": 1,
            "roperos": 1,
            "arco": 11
        };


        let categoriesImages = [];
        for (let i = 1; i <= categoryPhotosMap[lineName.toLowerCase()]; i++) {
            categoriesImages.push(`${process.env.REACT_APP_STATIC_PATH}/${lineName}/${lineName}_${i}.jpg`);
        }

        this.setState({
            slides: categoriesImages,
            selectedLine: lineName
        });
        console.log(lineName)
    }

    onFilter(category, items) {
        let categories = [
            {name: "Mesas", numberOfItems: 3},
            {name: "Roperos", numberOfItems: 1},
            {name: "Cajoneras", numberOfItems: 2},
            {name: "Archivo", numberOfItems: 2},
            {name: "Armarios", numberOfItems: 3},
        ];

        if (category) {
            const categoryObject = {
                name: category,
                numberOfItems: items
            }

            categories = [categoryObject];
        }

        this.setState({categories: categories})
    }

    render() {
        return (
            <div className="App">
                <Header />
                <MainContainer>
                    <Filter onFilter={(category, items) => this.onFilter(category, items)}/>
                    <section id="categories">
                        {this.renderCategories()}
                    </section>
                </MainContainer>
                <ModalCategory slides={this.state.slides} selectedLine={this.state.selectedLine} />
                <Footer />
            </div>
        );
    }
}

export default App;
