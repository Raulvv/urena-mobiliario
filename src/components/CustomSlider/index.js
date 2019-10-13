import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default class CustomSlider extends React.Component {
  render() {
    let settings = {
      dots: true,
      accessibility: true,
      center: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500
    };

    return (
      <section className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <img src={`${process.env.REACT_APP_STATIC_PATH}/look/look_1.jpg`} alt="slide" />
          </div>
          <div>
            <img src={`${process.env.REACT_APP_STATIC_PATH}/arco/arco_6.jpg`} alt="slide" />
          </div>
          <div>
            <img src={`${process.env.REACT_APP_STATIC_PATH}/armario_persiana/armario_persiana_7.jpg`} alt="slide" />
          </div>
        </Slider>
      </section>
    );
  }
}
