"use client"

import * as React from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FaFacebook,FaTwitter,FaGithub,FaGoogle } from "react-icons/fa";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar,Container,Divider,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Paper,Box,Grid,Typography } from "@mui/material"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '50vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} component='img' src='/LoginPage.jpg'/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square  sx={{textAlign:"left"}}>
          <Box sx={{ my: 12, mx: 4, display: 'flex', flexDirection: 'column'}}>

            <Typography component="h1" variant="h4" sx={{fontWeight:600}} >
              Welcome to Materialize
            </Typography>
            <Typography component="p" variant="p">
              Please sign-in to your account and start the adventure
            </Typography>


            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>

              <Grid container item justifyContent="center" >
                <Grid item sx={{display:"flex",flexWrap:"wrap",flexBasis:"2",justifyContent:"center",my:2}} >
                      <Typography  component="p" variant="p" sx={{mr:1}}  >
                            New on our platform?
                      </Typography>
                      <Link href="#" variant="body2" underline="none" >
                            { "Create an account"}
                      </Link>

                </Grid>

                <Grid item xs={12} sx={{ mb: 2 }}>
                    <Divider>or</Divider>
                </Grid>

                <Grid item xs={12} sx={{textAlign:"center"}} >
                    <Grid container sx={{gap:"1rem"}} justifyContent="center">
                      <Link href="#"><FaFacebook style={{color:"#1DA1F2", }}  /></Link>
                      <Link href="#"><FaTwitter style={{color:"#1DA1F2", }} /></Link>
                      <Link href="#"><FaGithub/></Link>
                      <Link href="#"><FaGoogle style={{color:"#D44638", }} /></Link>
                      
                    </Grid>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}