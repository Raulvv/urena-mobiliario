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
    return (
      <section className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <img src="/public/images/multipuesto.jpg" alt="slide" />
          </div>
          <div>
            <img src="/public/images/multipuesto.jpg" alt="slide" />
          </div>
          <div>
            <img src="/public/images/multipuesto.jpg" alt="slide" />
          </div>
          <div>
            <img src="/public/images/multipuesto.jpg" alt="slide" />
          </div>
          <div>
            <img src="/public/images/multipuesto.jpg" alt="slide" />
          </div>
          <div>
            <img src="/public/images/multipuesto.jpg" alt="slide" />
          </div>
        </Slider>
      </section>
    );
  }
}
