import Navbar from '../../components/Navbar'
import ApartmentCard from '../../components/ApartmentCard'

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,FaSistrix } from "react-icons/fa";
import InputAdornment from '@mui/material/InputAdornment';

function Profile() {

  return (

    <div className='Result-background'>
        <Navbar />

        <Grid container spacing={2} style={{padding:"4%"}}>
         
            <Grid item xs={12} style={{color:"white",display:"block"}}>
                <h1 className="result_title">User Profile</h1>
            </Grid>

            <Grid item xs={12} style={{color:"white",display:"block"}}>
               <ApartmentCard  />
            </Grid>


           
        
        </Grid>
       
        </div>

  );
}

export default Profile;