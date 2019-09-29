import React, { Component } from 'react';
import MiniatureSlider from '../MiniatureSlider';
import $ from "jquery";

export default class ModalCategory extends Component {
    closeModal(e) {
        if (!e.target.className.includes("close"))
            return;
        $('.ModalCategory-wrapper').fadeOut();
    }

    render() {
        return (
            <section className="ModalCategory-wrapper close-area" onClick={this.closeModal}>
                <MiniatureSlider
                    onClose={() => this.closeModal.bind(this)}
                    slides={this.props.slides}
                    selectedLine={this.props.selectedLine}
                />
            </section>
        );
    }
}
