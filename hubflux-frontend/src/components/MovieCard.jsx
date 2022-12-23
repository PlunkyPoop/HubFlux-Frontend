import { Card, Container, Grid, IconButton, TextField, Typography, Stack , Box} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
//import {useParams} from "react-router-dom";
import * as React from "react";


export default function MovieCard(props) {

  //temp image url
  const imgUrl= `https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png`;
  return (
    
    
    <Card sx={{ maxWidth:'100%'  }} >
    <Container >
      <Grid container spacing={0}>
        <Grid item xs={6} sm={7} md={7} lg={7} xl={7}>
          <Stack spacing={1}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }} align="left" color="primary">
              {props.name} 
            </Typography>
            <Typography variant="h10" align="left">
              {props.description} 
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: "italic" }} align="left">
              Movie Rating: {props.price}
            </Typography>
          </Stack>
        </Grid>
        <Grid item container xs={6} sm={5} md={5} lg={5} xl={5} alignItems="center" justifyContent="center">
          <div className="MovieImg">
            <img  style={{ maxHeight:'480px', width:"auto"}} src={props.image}/>
          </div>
          
        </Grid>
      </Grid>
    </Container>
  </Card>

  );
}
