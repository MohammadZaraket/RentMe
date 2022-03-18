import React, { useState, useEffect} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { Link } from "react-router-dom";




function SignUpForm() { 

  return (
    <div > 
      <Grid  style={{margin: "10% 0%"}}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 autos", backgroundColor:"#DEB841", borderRadius:"20px"}}>
          <CardContent>
          <Typography gutterBottom variant="p">
            Welcome to <b>RentMe</b>
          </Typography> 
            <Typography gutterBottom variant="h4"  style={{margin:"10px 0 "}}>
              <b>Sign Up</b>
          </Typography> 
            <form style={{padding:"0px"}}>
              <Grid container spacing={1}>
              <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>First Name</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}} placeholder="First Name" label="First Name" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>Last Name</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}}  placeholder="Last Name" label="Last Name" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b> Gender</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}} placeholder="Gender" label="Gender" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>Phone Number</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}}  placeholder="Phone Number" label="Phone Number" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>Enter Your Email Address</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}} type="email" placeholder="Enter email" label="Email Address" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" component="p" gutterBottom>
                    <b>Enter Your Password</b>
                 </Typography> 
                  <TextField  style={{backgroundColor:"white", marginBottom:"10px",  borderRadius:"10px" }} type="password" placeholder="Enter Password" label="password" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2"  component="p" gutterBottom>
                    <b>Confirm Your Password</b>
                 </Typography> 
                  <TextField  style={{backgroundColor:"white", marginBottom:"10px",  borderRadius:"10px" }} type="password" placeholder="Enter Password" label="password" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button className="signbtn" type="submit" variant="contained" color="primary"  fullWidth>Sign Up</Button>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2"  component="p" gutterBottom  style={{textAlign:"center"}}>
                    Already Have An Account?
                    <nav>
                        <Link to="/">      
                        <b>Sign In</b>
                        </Link>
                    </nav>

                 </Typography> 
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default SignUpForm;