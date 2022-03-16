import './SignIn.css';     
import SignInForm from "../../components/SignInForm";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';

function SignIn() {
  return (
    <>
   
        <div className="SignIn">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h1>Rent Me</h1>
              <h3>Let Us Guide You Home</h3>
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