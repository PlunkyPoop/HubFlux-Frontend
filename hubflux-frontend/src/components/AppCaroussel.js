import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import { Grid } from "@mui/material";
import axios from "axios";




export default function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false
  }



useEffect(()=>{
  axios.get("http://localhost:8081/stream-services", {mode:'cors'}).then(response => {

    setServices(props.props);
    
  });
},[])
  
  // keep track of the current slide image
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imdbMovie, setIMDBMovie] = useState();



  //Load slider when all database data is loaded
  const [isLoading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  

  return (
    <Grid marginLeft={5}>
    <Slider {...settings} beforeChange={(currentSlide, nextSlide) => {
              setCurrentIndex(nextSlide);
              setIMDBMovie(services[nextSlide].imdbMovie);

          }}>
    {services.map((service) => (
       <div>{console.log(currentIndex)}
       <img id={service.name} src={service.imageLocation} height="200px" />
      </div>
        ))}

    </Slider>
    </Grid>
  );
}