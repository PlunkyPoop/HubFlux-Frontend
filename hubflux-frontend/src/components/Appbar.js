import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate} from "react-router-dom";

export default function ButtonAppBar() {

    const navigate = useNavigate();
    const NavigateToSettings  = () => navigate('/settings');
  

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >

        <Box
    m={1}
  //margin
    display="flex"
    justifyContent="flex-end"
    alignItems="flex-end"
  >
          <IconButton onClick={NavigateToSettings}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            text-alignment="right"
            sx={{ mr: 2 }}
          >

            <SettingsIcon />
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
}
