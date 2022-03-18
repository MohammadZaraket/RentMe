import React from 'react';
import SignUpForm from "../../components/SignUpForm";
import { Grid} from '@mui/material/';
import "../SignIn/SignIn.css"



function SignUp() {
  return (
    <>
   
        <div className="SignIn">
          <Grid container spacing={2}>
              <Grid item xs={6} style={{color:"white", fontFamily:"Roboto Mono"}}>
                <Grid>
                <h1 className="title">Rent Me</h1>
                <h5 className="slogan">Let Us Guide You Home</h5>
                </Grid>
              </Grid>
    
            
              <Grid item xs={6}>
                     <SignUpForm />
              </Grid>
    
            
          </Grid>
        </div>
         
    
    </>
    


  );
}

export default SignUp;