import React, { useState, useEffect} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { Link } from "react-router-dom";




function SignInForm() { 

  return (
    <div > 
      <Grid  style={{margin: "20% 5%"}}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 autos", backgroundColor:"#DEB841", borderRadius:"20px"}}>
          <CardContent>
          <Typography gutterBottom variant="p">
            Welcome to <b>RentMe</b>
          </Typography> 
            <Typography gutterBottom variant="h4"  style={{margin:"20px 0 "}}>
              <b>Sign In</b>
          </Typography> 
            <form style={{padding:"0px"}}>
              <Grid container spacing={1}>
                <Grid item xs={12} >
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                   <b>Enter Your Email Address</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}} type="email" placeholder="Enter email" label="Email Address" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    <b>Enter Your Password</b>
                 </Typography> 
                  <TextField  style={{backgroundColor:"white", marginBottom:"10px",  borderRadius:"10px" }} type="password" placeholder="Enter Password" label="password" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button className="signbtn" type="submit" variant="contained" color="primary"  fullWidth>Sign In</Button>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom  style={{textAlign:"center"}}>
                    Don't Have An Account?
                    <nav>
                        <Link to="/SignUp">      
                        <b>Sign Up</b>
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

export default SignInForm;