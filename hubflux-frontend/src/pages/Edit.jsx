import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { FormGroup, InputLabel, TextField } from '@mui/material';
import {  useNavigate, useParams  } from "react-router-dom";

export default function Edit() {

  const navigate = useNavigate();
  const {name}= useParams();

  const onSubmit= async (event)=>{
    event.preventDefault();
    await axios.put(`http://localhost:8081/put/streamservice/${service.id}`, service);
    navigate("/settings");
};

const onInputChange=(event)=>{       
  // Keeps adding new objects
  console.log(event.target.name);
  console.log(event.target.value);
  setServices({...service, [event.target.name]: event.target.value});
  

};
useEffect(()=>{
  loadData();
});


const [service, setServices]=useState({
  name:"",
  imageLocation:"",
  imdbMovie:"",
});


const loadData= async (event)=>{
        axios.get("http://localhost:8081/get-service/"+ name, {mode:'cors'}).then(response => {
          console.log(name);
          setServices(response.data);
          console.log(response.data);
        });
    }
    // const onSubmit= async (event)=>{
    //     event.preventDefault();
    //     await axios.put(`${id}`, person);
    //     navigate("/");
    // };



  return (
<FormGroup style={{backgroundColor: "#ffffff", padding: 10}} sx={{ width: 900, margin: 'auto' }}>

  <InputLabel htmlFor="name">Name</InputLabel>
  <TextField   type="text" id="nameinput" aria-describedby="name" name="name" value={service.name} onChange={(event)=>onInputChange(event)}/>

  <InputLabel htmlFor="imageLocation">Image location</InputLabel>
  <TextField  type="text" id="imageLocation" aria-describedby="imageLocation" name="imageLocation"  value={service.imageLocation} onChange={(event)=>onInputChange(event)}/>

  <InputLabel htmlFor="imdbMovie">IMDB code</InputLabel>
  <TextField  type="text" id="imdbMovie" aria-describedby="imdbMovie" name="imdbMovie" value={service.imdbMovie} onChange={(event)=>onInputChange(event)}/>


    <Button onClick={onSubmit}>Change</Button>
</FormGroup>
 
  )
}