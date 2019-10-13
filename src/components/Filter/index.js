import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="Filter-wrapper">
                <h2 className="Filter-title">Encuentra lo que buscas</h2>
                <nav className="Filter-container">
                    <div
                        className="Filter-item"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onFilter("Mesas", 3)
                        }}
                    >
                        <a href="#"><span>Mesas</span></a>
                    </div>
                    <div
                        className="Filter-item"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onFilter("Roperos", 1)
                        }}
                    >
                        <a href="#"><span>Roperos</span></a>
                    </div>
                    <div
                        className="Filter-item"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onFilter("Cajoneras", 2)
                        }}
                    >
                        <a href="#"><span>Cajoneras</span></a>
                    </div>
                    <div
                        className="Filter-item"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onFilter("Archivo", 2)
                        }}
                    >
                        <a href="#"><span>Archivo</span></a>
                    </div>
                    <div
                        className="Filter-item"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onFilter("Armarios", 3)
                        }}
                    >
                        <a href="#"><span>Armarios</span></a>
                    </div>
                </nav>
            </div>
        );
    }
}
