import Navbar from '../../components/Navbar'

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare } from "react-icons/fa";

function Results() {

  return (

    <div className='Result-background'>
        <Navbar />

        <Grid container spacing={2} style={{padding:"4%"}}>
            
              <Grid item xs={12}  style={{display:"block"}} >
                <form className="search-results">
                    <Grid item xs={6} style={{paddingRight:"10px"}} >
                    <TextField style={{backgroundColor:"white"}}  placeholder="Where Do You Want To Live Next? " label="Location" variant="outlined"  fullWidth required />
                    </Grid>
                    <Grid item xs={2}>
                    <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Rooms</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Price</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Find Now!</Button>
                    </Grid>
           
                </form>
              </Grid>

            <Grid item xs={12} style={{color:"white",display:"block"}}>
                <h1 className="result_title">Search Results</h1>
            </Grid>

            <Grid item xs={4} style={{color:"white",display:"block"}}>
                <h1 className="result_title">Search Results</h1>
            </Grid>
            <Grid item xs={4} style={{color:"white",display:"block"}}>
                <h1 className="result_title">Search Results</h1>
            </Grid>
            <Grid item xs={4} style={{color:"white",display:"block"}}>
                <h1 className="result_title">Search Results</h1>
            </Grid>
        
        </Grid>
       
        </div>

  );
}

export default Results;