'use client'
import React, { useContext } from "react";
import { Typography, Box, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import HighContrastContext from '../createContext'; // Update the path accordingly
import style from './style.module.css';

function AboutPage() {
  const { isHighContrast } = useContext(HighContrastContext);
  console.log(isHighContrast);

  return (
    <>
      <Box sx={{margin:"0 15px"}} className={style.fade1}>
         <Typography variant="h4" className={style.headingTag}>27 Best About Us and About Me Page</Typography>
         <Typography variant="h4" className={style.headingTag}>Examples of 2023[+ Templates]</Typography>
         <Button variant="contained" className={style.text_btn} sx={{backgroundColor: isHighContrast ? "#0000ff" : "#fd5932", margin:"10px 0" }}>
           Download Now: Free About Us Examples
         </Button>
       </Box>
       <Box className={style.container}>
         <Typography component="p" className={style.para}>
           Your about page summarizes your history, value and mission - all in
           one place.
           That's a tall order for just a few paragraphs. If you're feeling
           stuck, turn to these 
           about-page example for inspiration
         </Typography>
         <Box component="img" alt="About Us Template" className={style.image} height="370px" width="40%" src="about.jpg"/>
       </Box>
    </>
  );
}

export default AboutPage;
