import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { FormGroup, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { margin, width } from "@mui/system";

export default function Edit(name) {
    

    useEffect(()=>{
        axios.get("http://localhost:8081/get-service/"+ name, {mode:'cors'}).then(response => {
          setServices(response.data);
          console.log(response.data);
        });
      },[])

      const [services, setServices] = useState([]);

    // const onSubmit= async (event)=>{
    //     event.preventDefault();
    //     await axios.put(`${id}`, person);
    //     navigate("/");
    // };



  return (
<FormGroup style={{backgroundColor: "#ffffff"}} sx={{ width: 900, margin: 'auto' }}>

  <InputLabel htmlFor="name">Name</InputLabel>
  <Input id="name" aria-describedby="name-input" value={name} />

  <InputLabel htmlFor="image-location">Image location</InputLabel>
  <Input id="image-location" aria-describedby="image-input" value={name} />

  <InputLabel htmlFor="imdb-code">IMDB code</InputLabel>
  <Input id="imdb-code" aria-describedby="imdb-input" />

</FormGroup>
 
  )
}