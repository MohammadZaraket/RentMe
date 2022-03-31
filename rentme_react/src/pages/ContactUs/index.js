import Navbar from '../../components/Navbar'
import ApartmentCard from '../../components/ApartmentCard'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import React, { useState, useEffect} from 'react';
import axios from "axios";

function ContactUs() {


  return (

    <div className='Result-background'>
        <Navbar />

        <Grid container spacing={2} style={{padding:"4%"}}>
         
            <Grid item xs={12} style={{color:"white",display:"block"}}>
                <h1 className="result_title">Contact Us</h1>
            </Grid>
        
        </Grid>
       
        </div>

  );
}

export default ContactUs;