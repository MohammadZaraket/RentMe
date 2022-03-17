import './SignIn.css';     
import SignInForm from "../../components/SignInForm";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';

function SignIn() {
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
                <SignInForm />
              </Grid>
            
          </Grid>
        </div>
         
    
    </>

  );
}

export default SignIn;