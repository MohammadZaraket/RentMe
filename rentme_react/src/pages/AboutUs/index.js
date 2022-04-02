import Navbar from '../../components/Navbar'
import ApartmentCard from '../../components/ApartmentCard'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import React, { useState, useEffect} from 'react';
import axios from "axios";

function AboutUs() {

  return (

    <div className='Result-background'>
        <Navbar />

        <div className='about'> 
        <Grid container spacing={2}>
            <Grid item xs={12}>   
                <Typography component="h1">
                   <h1>About Us</h1> 
                </Typography> 
            </Grid>
            <Grid item xs={12}> 
                <Typography variant="body2"  component="p" gutterBottom>
                   RentMe is a rental property website, where you as a user -after signing in- can search for apartments in specific city or can keep the search field empty to find nearby apartments.
                   RentMe also offers you the ability to upload and display your apartments to be rented.
                   Note that, when using RentMe, you are accepting the terms and conditions applied. By signing into RentMe user has the choice to accept receiving notifications send from the website to users in case of any tour requested. 
                    In addition of accessing the user's Location for optimizing nearby searching.
                </Typography> 
            </Grid>
         
        </Grid>
        </div>
       
        </div>

  );
}

export default AboutUs;