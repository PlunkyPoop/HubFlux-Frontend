import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";

export default function PlexTextfield() {
    const[name,setName]=React.useState('')
    const[address,setAddress]=React.useState('');


    const handleClick= (e)=>
    { 
        e.preventDefault()
        const plex={name,address}
        console.log(plex)
        fetch("http://localhost:8080/plex/add",{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(plex)
        }).then(()=>{
          console.log("New student added")
        })
    }
    

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Plex Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="filled-basic" label="Plex Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      {name}
      {address}

      <Stack spacing={2} direction="row">
      <Button onClick={handleClick} variant="contained">Submit</Button> 
    </Stack>
    </Box>
  );
}
