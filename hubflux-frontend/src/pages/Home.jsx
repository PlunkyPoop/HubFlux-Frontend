import ButtonAppBar from '../components/Appbar'
import MovieCard from '../components/MovieCard';
import React from 'react';
import SimpleSlider from '../components/AppCaroussel';
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from '@mui/material';

import '../App.css';

export default function Home() {

  const [imdbdata, setIMDBData]=useState([]);

  const imdbmovie = "tt11198330";

  // const {id}= 1;
  useEffect(() => {
      async  function LoadIMDBData() {
      try {
        const res = await axios.get(`http://localhost:8081/imdbData/`+ imdbmovie);
        console.log(res.data);
        setIMDBData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    LoadIMDBData();
  }, []);


  useEffect(()=>{
    axios.get("http://localhost:8081/stream-services", {mode:'cors'}).then(response => {
      setServices(response.data);
      console.log(response.data);
      setLoading(false);
    });
  },[])
    
    const [isLoading, setLoading] = useState(true);
    const [services, setServices] = useState([]);


  return (


<div className="App">
<Grid item xs={8}>

<ButtonAppBar/>
</Grid>


   
<Grid container spacing={3} sx={{p:2}} alignItems="center" justifyContent="center">
       
       <Grid>
        
           <MovieCard name={imdbdata.title} description={imdbdata.plot} price={imdbdata.imDbRating} image={imdbdata.image}/>
       </Grid>
   
</Grid>

{isLoading === false && 
    <SimpleSlider props={services}/>
  }
     

        

    </div>
  );
}