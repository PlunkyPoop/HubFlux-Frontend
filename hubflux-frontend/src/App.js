import { Button,Grid,BottomNavigation } from '@mui/material';
import './App.css';
import ButtonAppBar from './components/Appbar'
import PlexTextfield from './components/Plex';
import Carousel from 'react-elastic-carousel'
import React, { Component } from 'react';
import SimpleSlider from './components/AppCaroussel';



function App() {
  return (

<div className="App">
<Grid xs={8}>
<ButtonAppBar/>
</Grid>
  <Grid container spacing={2}>
 
  <Grid xs={4}>

  </Grid>
  <Grid xs={4}>

  </Grid>
  <Grid xs={8}>

  </Grid>
</Grid>
        
        {/* <PlexTextfield/> */}
   
        <SimpleSlider/>
   
        {/* <Button/> */}
        

    </div>
  );
}

export default App;
