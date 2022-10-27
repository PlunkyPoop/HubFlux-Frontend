import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

//Importing images
import AmazonPrime from "./Images/AmazonPrime.png"
import DisneyPlus from "./Images/DisneyPlus.png"
import HBOMax from "./Images/HboMax.png"
import Hulu from "./Images/Hulu.png"
import Netflix from "./Images/Netflix.png"
import Plex from "./Images/plex.png"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Plex} height="200px" />
      </div>
      <div>
        <img src={Netflix} height="200px" />
      </div>
      <div>
        <img src={Hulu} height="200px" />
      </div>
      <div>
        <img src={HBOMax} height="200px" />
      </div>
      <div>
        <img src={DisneyPlus} height="200px" />
      </div>
      <div>
        <img src={AmazonPrime} height="200px" />
      </div>
    </Slider>
  );
}