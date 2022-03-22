import React, { useState, useEffect} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function SignInForm() { 

    var [alertStyle,setAlertStyle] = useState({display:'none'});
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();



    function handleLoginSuccess(response) {
        localStorage.setItem('access_token', response.access_token);
        return true;
    }

  async function doUserLogin(credentials) {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", credentials);
      return response.data;
    } catch (error) {
      console.log(error.response.status);
      return false;
    }
  }

   async function login(event){

    event.preventDefault();
    if(email=="" || password=="")
    {  
        setAlertStyle({color: 'red', display:"flex"});
        return false;
    }
    let item = {email,password};
    const response = await doUserLogin(item);
    if (response) {
          handleLoginSuccess(response);
          navigate("/Main");
        } else {
            console.log("");
        }
      }
    
  return (
    <div> 
      <Grid  style={{margin: "20% 5%"}}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", backgroundColor:"#DEB841", borderRadius:"20px"}}>
          <CardContent>
          <Typography gutterBottom variant="p">
            Welcome to <b>RentMe</b> 
          </Typography> 
            <Typography gutterBottom variant="h4"  style={{margin:"10px 0 "}}>
              <b>Sign In</b> 
          </Typography> 
            <form style={{padding:"0px"}}>
              <Grid container spacing={1}>
                <Grid item xs={12} >
                <Typography variant="body2"  component="p" gutterBottom>
                   <b>Enter Your Email Address</b> 
                 </Typography> 
                  <TextField style={{backgroundColor:"white", marginBottom:"10px", borderRadius:"10px", borderWidth:"0px"}} type="email" placeholder="Enter email" variant="outlined"  value={email} onInput={e => setEmail(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" component="p" gutterBottom>
                    <b>Enter Your Password</b>
                 </Typography> 
                  <TextField  style={{backgroundColor:"white", marginBottom:"10px",  borderRadius:"10px" }} type="password" placeholder="Enter Password" variant="outlined" value={password} onInput={e => setPassword(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h4 style={alertStyle}>*Please Enter All Fields</h4>
                  <Button className="signbtn" type="submit" variant="contained" color="primary" onClick= {login} fullWidth>Sign In</Button>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom  style={{textAlign:"center", padding:"10px 0"}}>
                    <nav>
                        Don't Have An Account?  <Link to="/SignUp" className='sign-link'><b> Sign Up</b></Link> 
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