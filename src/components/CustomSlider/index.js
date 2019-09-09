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
      arrows: true,
      accessibility: true,
      center: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    console.log("HOLA", process.env);
    return (
      <section className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <img src={`${process.env.REACT_APP_STATIC_PATH}/ESPECIAL/call%20center%20baja.jpg`} alt="slide" />
          </div>
          <div>
            <img src={`${process.env.REACT_APP_STATIC_PATH}/ROPEROS/ureña02_ok.jpg`} alt="slide" />
          </div>
        </Slider>
      </section>
    );
  }
}
