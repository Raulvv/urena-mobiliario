import React, { Component } from 'react';
import '../../App.css';
import Header from '../Header';
import MainContainer from '../MainContainer';
import Footer from '../Footer';
import Separator from '../../components/Separator';
import ProductLineExpositor from '../../components/ProductLineExpositor';

export default class CategoriesPage extends Component {
    render() {
        return (
            <div className="CategoriesPage">
                <Header />
                <MainContainer>

                </MainContainer>
                <Footer />
            </div>
        );
    }
}
