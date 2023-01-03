import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Settings() 
{
    const deleteService= async (id)=>{
        await axios.delete(`https://hubflux.azurewebsites.net/delete/streamservice/${id}`);
        LoadServices();
    }


    const navigate = useNavigate();
    const NavigateToMain  = () => navigate('/');
    const NavigateToAdd  = () => navigate('/add');

    
    useEffect(()=>{
        LoadServices();
      },[])

      const LoadServices= async ()=>{
        axios.get("https://hubflux.azurewebsites.net/stream-services", {mode:'cors'}).then(response => {
            setServices(response.data);
            console.log(response.data);
          });
    }
        
        const [services, setServices] = useState([]);
return (
    <div style={{ width: '100%' }}>
    <TableContainer component={Paper} sx={{ width: 900, margin: 'auto' }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">IMDB Code</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {services.map((service) => (
          <TableRow
            key={service.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {service.name}
            </TableCell>
            <TableCell align="right">{service.imdbMovie}</TableCell>
            <TableCell align="right">
            <IconButton onClick={()=> navigate('/edit/'+ service.name)} 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            text-alignment="right"
            sx={{ mr: 2 }}
            ><ModeEditIcon /></IconButton>

            <IconButton onClick={()=>deleteService(service.id)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            text-alignment="right"
            sx={{ mr: 2 }}
            ><DeleteIcon /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Button aria-label="DeleteBtn" onClick={NavigateToMain} sx={{ textAlign: "center"}}  className="btn btn-outline-warning mx-2">Go Back to Main Page</Button>
    <Button id="AddService" onClick={NavigateToAdd} sx={{ backgroundColor: "green", color: "white"}} className="btn btn-outline-warning mx-2">Add Streaming service</Button>
  </TableContainer>

  </div>

    )
}
