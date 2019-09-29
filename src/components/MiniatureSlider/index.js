import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CustomSlide extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.src} alt=""/>
            </div>
        );
    }
}

export default class MiniatureSlider extends React.Component {
    render() {
        const selectedLine = this.props.selectedLine;
        const settings = {
            customPaging: function(i) {
                return (
                    <a>
                        <img alt={""} src={`${process.env.REACT_APP_STATIC_PATH}/${selectedLine}/${selectedLine}_${i+1}.jpg`} />
                    </a>
                );
            },
            arrows: false,
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="MiniatureSlider-wrapper">
                <div className="modal-head-wrapper">
                    <div className="download-wrapper">
                        <button type="submit"
                                onClick={() => window.location.href=`${process.env.REACT_APP_STATIC_PATH}/SERIE LOOK/catalogo UREÑA.pdf`}>
                            <img src="https://cdn1.iconfinder.com/data/icons/file-formats-7/502/Untitled-4-512.png" alt="Download pdf"/>
                        </button>
                    </div>
                    <div className="close-wrapper">
                        <img alt={""} className="close-icon" src="https://static.thenounproject.com/png/6448-200.png" onClick={() => this.props.onClose.bind(this)} />
                    </div>
                </div>
                <Slider {...settings}>
                    {this.props.slides.map((image, index) => {
                        return <CustomSlide src={image} key={index} />
                    })}
                </Slider>
            </div>
        );
    }
}
