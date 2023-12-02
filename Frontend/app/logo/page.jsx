import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import CardComponent from "../component/CardComponent";
import style from './style.module.css'
function LogoPage() {
  const imageSources = [
    "logo6.png",
    "logo6.png",
    "logo6.png",
    "logo6.png",
    "logo6.png",
    "logo6.png",
    "logo6.png",
    "logo6.png",
  ];
  return (
    <>
      <Box marginTop={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" className={style.heading}>
              Find a Perfect Logo for Dude
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={4}>
        <Container style={{ backgroundColor: "#ccc", padding: "16px" }} className={style.container}>
          <Grid container spacing={2}>
            {imageSources.map((src, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <CardComponent imageSrc={src} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default LogoPage;
