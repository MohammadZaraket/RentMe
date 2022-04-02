import Navbar from '../../components/Navbar'
import ApartmentCard from '../../components/ApartmentCard'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import React, { useState, useEffect} from 'react';
import axios from "axios";

function ContactUs() {

    const [alertStyle,setAlertStyle] = useState({display:'none'});

  return (

    <div className='Result-background'>
        <Navbar />

        <div className='contact-form'> 
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", backgroundColor:"#DEB841", borderRadius:"20px"}}>
          <CardContent>
          <Typography gutterBottom variant="p">
            Welcome to <b>RentMe</b> 
          </Typography> 
            <Typography gutterBottom variant="h4"  style={{margin:"20px 0 "}}>
              <b>Contact Us </b> 
          </Typography> 
            <form style={{padding:"0px"}}>
              <Grid container spacing={1}>
                <Grid item xs={12} >
                <Typography variant="body2"  component="p" gutterBottom>
                   <b>Email Address</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}} type="email" placeholder="Enter email" variant="outlined"  value=""  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" component="p" gutterBottom>
                    <b>Subject</b>
                 </Typography> 
                 <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}}  placeholder="Subject" variant="outlined"  value=""  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" component="p" gutterBottom>
                    <b>Message</b>
                 </Typography> 
                 <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}}  placeholder="Message" variant="outlined"  value=""  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h4 style={alertStyle}>*Please Enter All Fields</h4>
                  <Button className="signbtn" type="submit" variant="contained" color="primary"  fullWidth>Submit</Button>
                </Grid>


              </Grid>
            </form>

          </CardContent>
        </Card>
    </div>

 
       
        </div>

  );
}

export default ContactUs;