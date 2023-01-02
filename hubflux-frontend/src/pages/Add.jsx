import axios from "axios";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FormGroup, InputLabel, Input } from '@mui/material';
import {  useNavigate  } from "react-router-dom";

export default function Add() {
    const navigate = useNavigate();
  
    const onSubmit= async (event)=>{
      event.preventDefault();
      await axios.post(`http://localhost:8081/post/streamservice`, service);
      navigate("/settings");
  };
  
  const onInputChange=(event)=>{       
    // Keeps adding new objects
    console.log(event.target.name);
    console.log(event.target.value);
    setServices({...service, [event.target.name]: event.target.value});
    
  
  };

  
  
  const [service, setServices]=useState({
    name:"",
    imageLocation:"",
    imdbMovie:"",
  });
  
  
  
    return (
  <FormGroup style={{backgroundColor: "#ffffff", padding: 10}} sx={{ width: 900, margin: 'auto' }}>
  
    <InputLabel htmlFor="name">Name</InputLabel>
    <Input   type="text" id="nameinput" aria-describedby="name" name="name" value={service.name} onChange={(event)=>onInputChange(event)}/>
  
    <InputLabel htmlFor="imageLocation">Image location</InputLabel>
    <Input  type="text" id="imageLocation" aria-describedby="imageLocation" name="imageLocation"  value={service.imageLocation} onChange={(event)=>onInputChange(event)}/>
  
    <InputLabel htmlFor="imdbMovie">IMDB code</InputLabel>
    <Input  type="text" id="imdbMovie" aria-describedby="imdbMovie" name="imdbMovie" value={service.imdbMovie} onChange={(event)=>onInputChange(event)}/>
  
  
      <Button onClick={onSubmit}>Add</Button>
  </FormGroup>
   
    )
  }
