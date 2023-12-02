"use client"
import React, { createContext, useContext, useState } from "react";
import { Box, AppBar, Toolbar, Button, Switch, FormControlLabel } from '@mui/material';
import Link from 'next/link';
import './style.css';
import HighContrastContext from '../createContext';

function Header() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => !prev);
    console.log(isHighContrast);
  };

  return (
    <HighContrastContext.Provider value={{ isHighContrast}}>
      <Box sx={{margin:0}}>
     <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow:'none' }}>
           <Toolbar>
             <FormControlLabel
               control={<Switch onChange={toggleHighContrast} />}
               sx={{ flexGrow: 1, color: "#000000" }}
               label="High Contrast"
             />
             <Button variant="text" className="text_btn1" sx={{ color: "#000000" }}>
               <Link href="/Login" className="login_btn">Login</Link>
             </Button>
             <Button variant="contained" className="text_btn2" sx={{backgroundColor: isHighContrast ? "#0000ff" : "#fd5932" }}>
               Start free or get demo
             </Button>
           </Toolbar>
         </AppBar>
       </Box>
    </HighContrastContext.Provider>
  );
}

export default Header;