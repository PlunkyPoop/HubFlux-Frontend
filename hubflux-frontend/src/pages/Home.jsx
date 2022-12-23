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

  
  // const {id}= 1;
  useEffect(() => {
    async function LoadIMDBData(imdbmovie) {
      try {
        const res = await axios.get(`http://localhost:8081/imdbData/tt11198330`);
        console.log(res.data);
        setIMDBData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    LoadIMDBData();
  }, []);



  // useEffect(()=>{
  //   LoadIMDBData();
  // },[])

  // const LoadIMDBData= async ()=>{
  //   const result= await axios.get("http://localhost:8081/imdbData");
  //   console.log(result.data);
  //   setIMDBData(result.data);
  // }


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

   
        <SimpleSlider/>
     

        

    </div>
  );
}