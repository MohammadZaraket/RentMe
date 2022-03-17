import './SignIn.css';     
import SignInForm from "../../components/SignInForm";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "../SignUp";

function SignIn() {

  return (
    <>
      <Routes>
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
   
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