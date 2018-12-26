import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
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
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section style={{ margin: '50px 0' }}>
        <Slider {...settings}>
          <div>
            <img src="images/multipuesto.jpg" alt="slide" style={{ width: 500, margin: 'auto' }} />
          </div>
          <div>
            <img src="images/multipuesto.jpg" alt="slide" style={{ width: 500, margin: 'auto' }} />
          </div>
          <div>
            <img src="images/multipuesto.jpg" alt="slide" style={{ width: 500, margin: 'auto' }} />
          </div>
          <div>
            <img src="images/multipuesto.jpg" alt="slide" style={{ width: 500, margin: 'auto' }} />
          </div>
          <div>
            <img src="images/multipuesto.jpg" alt="slide" style={{ width: 500, margin: 'auto' }} />
          </div>
          <div>
            <img src="images/multipuesto.jpg" alt="slide" style={{ width: 500, margin: 'auto' }} />
          </div>
        </Slider>
      </section>
    );
  }
}
