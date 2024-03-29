import ButtonAppBar from '../components/Appbar'
import MovieCard from '../components/MovieCard';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Grid } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import '../App.css';

export default function Home() {

  const [imdbdata, setIMDBData]=useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false
  }


      async function LoadIMDBData(imdbmovie) {
      try {
        const res = await axios.get(`https://hubflux.azurewebsites.net/imdbData/`+ imdbmovie);
        console.log(res.data);
        setIMDBData(res.data);
      } catch (error) {
        console.log(error);
      }
      setMovieLoading(false);
    }
    
    
    function newMovie(imdbMovie)
    {
      setMovieLoading(true);
      LoadIMDBData(imdbMovie);
    }

  useEffect(()=>{
    axios.get("https://hubflux.azurewebsites.net/stream-services", {mode:'cors'}).then(response => {
      setServices(response.data);
      LoadIMDBData(response.data[currentIndex].imdbMovie);
      setLoading(false);

    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  
    const [LoadingMovie, setMovieLoading] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [services, setServices] = useState([]);


  return (


<div className="App">
<Grid item xs={8}>

<ButtonAppBar/>
</Grid>


   
<Grid container spacing={3} sx={{p:2}} alignItems="center" justifyContent="center">
       
       <Grid>
       {LoadingMovie === false && 
           <MovieCard name={imdbdata.title} description={imdbdata.plot} price={imdbdata.imDbRating} image={imdbdata.image}/>
       }
       </Grid>
   
</Grid>

{isLoading === false && 
    // <SimpleSlider props={services}/>
    <Grid marginLeft={5}>
    <Slider {...settings} beforeChange={(currentSlide, nextSlide) => {
              setCurrentIndex(nextSlide);
              newMovie(services[nextSlide].imdbMovie);

          }}>
    {services.map((service) => (
       <img key={service.name}  alt="serviceimage" id={service.name} src={service.imageLocation} height="200px" />
        ))}

    </Slider>
    </Grid>
  }
     

        

    </div>
  );
}
