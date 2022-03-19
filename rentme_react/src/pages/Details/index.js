import Navbar from '../../components/Navbar'

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch,FaBed,FaBath } from "react-icons/fa";
import InputAdornment from '@mui/material/InputAdornment';

function Details() {

  return (

    <div className='Result-background'>
        <Navbar />

            <Grid container spacing={2} style={{padding:"4%"}}>
                <Grid item xs={6}>
                    <Typography>
                    <h1>testgrid6testestestjjesttest </h1>
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                            <h1>Apartment Title Here</h1>
                                <hr/>
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant="body2" color="text.secondary">
                                4 <FaBed size={30}/>
                            </Typography>
                        </Grid>
    
                        <Grid item xs={3}>
                            <Typography variant="body2" color="text.secondary">
                                2 <FaBath size={30} />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
       
        </div>

  );
}

export default Details;