import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class MiniatureSlider extends React.Component {
    render() {
        const settings = {
            customPaging: function(i) {
                return (
                    <a>
                        <img src={`${process.env.REACT_APP_STATIC_PATH}/ESPECIAL/call%20center%20baja.jpg`} />
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
                <div className="close-wrapper">
                    <div>
                        <img className="close-icon" src="https://static.thenounproject.com/png/6448-200.png" onClick={() => this.props.onClose.bind(this)} />
                    </div>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src={`${process.env.REACT_APP_STATIC_PATH}/ESPECIAL/call%20center%20baja.jpg`} />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_STATIC_PATH}/ESPECIAL/call%20center%20baja.jpg`} />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_STATIC_PATH}/ESPECIAL/call%20center%20baja.jpg`} />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_STATIC_PATH}/ESPECIAL/call%20center%20baja.jpg`} />
                    </div>
                </Slider>
            </div>
        );
    }
}
