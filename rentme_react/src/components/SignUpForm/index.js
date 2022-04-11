import React, { useState, useEffect} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

function SignUpForm() { 

  const [first_name,setFirst_name] = useState("");
  const [last_name,setLast_name] = useState("");
  const [gender,setGender] = useState("");
  const [phone_number,setPhone_number] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [password_confirmation,setPassword_confirmation] = useState("");

  const navigate = useNavigate();
  const SignUpURL = "http://127.0.0.1:8000/api/auth/register";

  function signUp(event) {
      event.preventDefault();
      let data = {first_name, last_name, gender,phone_number, email, password, password_confirmation};
      axios
        .post(SignUpURL, data).then((response) => {
         navigate('/')
        });
    }


  return (
    <div > 
      <Grid  style={{margin: "5% 0%"}}>
        <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto", backgroundColor:"#DEB841", borderRadius:"20px"}}>
          <CardContent>
          <Typography gutterBottom variant="p">
            Welcome to <b>RentMe</b>
          </Typography> 
            <Typography gutterBottom variant="h4"  style={{margin:"15px 0 "}}>
              <b>Sign Up</b>
          </Typography> 
            <form style={{padding:"0px"}}>
              <Grid container spacing={1}>
              <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>First Name</b> 
                 </Typography> 
                  <TextField className="signup-field" placeholder="First Name"  variant="outlined" value={first_name} onInput={e => setFirst_name(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>Last Name</b> 
                 </Typography> 
                  <TextField className="signup-field"  placeholder="Last Name"  variant="outlined" value={last_name} onInput={e => setLast_name(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b> Gender</b> 
                 </Typography> 
                  <Box fullWidth>
                            <FormControl fullWidth >
                                <Select value={gender} onChange={e => setGender(e.target.value)} style={{backgroundColor:"white",padding:"6.5px 0",borderRadius:"10px"}}>
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                </Grid>
                <Grid item xs={6} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>Phone Number</b> 
                 </Typography> 
                  <TextField className="signup-field" placeholder="Phone Number" variant="outlined" value={phone_number} onInput={e => setPhone_number(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12} >
                <Typography variant="body2" component="p" gutterBottom>
                   <b>Enter Your Email Address</b> 
                 </Typography> 
                  <TextField className="signup-field" type="email" placeholder="Enter email" variant="outlined" value={email} onInput={e => setEmail(e.target.value)}  fullWidth required />
                </Grid>
                <Grid item xs={6}>
                <Typography variant="body2" component="p" gutterBottom>
                    <b>Enter Your Password</b>
                 </Typography> 
                  <TextField className="signup-field" type="password" placeholder="Enter Password"  variant="outlined" value={password} onInput={e => setPassword(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={6}>
                <Typography variant="body2"  component="p" gutterBottom>
                    <b>Confirm Your Password</b>
                 </Typography> 
                  <TextField className="signup-field" type="password" placeholder="Enter Password" variant="outlined" fullWidth value={password_confirmation} onInput={e => setPassword_confirmation(e.target.value)} required />
                </Grid>
                <Grid item xs={12}>
                  <Button className="signbtn" type="submit" variant="contained" color="primary" onClick={signUp}  fullWidth>Sign Up</Button>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2"  component="p" gutterBottom  style={{textAlign:"center",padding:"10px 0"}}>
                    <nav>
                        Already Have An Account? <Link to="/" className='sign-link'><b> Sign In</b></Link>
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