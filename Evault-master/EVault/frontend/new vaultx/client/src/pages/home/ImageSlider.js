// ImageSlider.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './img/logo.jpg';
import image3 from './img/image3.jpg';
import desk from './img/desk.jpg';
import "./ImageSlider.css";

const ImageSlider = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...sliderSettings} className="image-slider">
      <div className="slider-item">
        <div className="column"></div>
        <img src={logo} alt="Slide 1" />
      </div>
      <div className="slider-item">
        <img src={image3} alt="Slide 2" />

      </div>
      <div className="slider-item">
        <img src={desk} alt="Slide 2" />
        
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
