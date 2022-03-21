import Navbar from '../../components/Navbar'
import ImagesCarousel from '../../components/ImagesCarousel'
import TourModal from '../../components/TourModal'

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch,FaBed,FaBath } from "react-icons/fa";
import InputAdornment from '@mui/material/InputAdornment';

function Details() {

  return (

    <div className='Result-background'>
        <Navbar />

            <Grid container spacing={2} style={{padding:"4%"}}>
                <Grid item xs={12} sm={6}>
                   <ImagesCarousel />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <h1 className='details-title'>Apartment Title Here</h1>
                            <hr className='line' />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant="body2" color="text.secondary">
                                4 <FaBed size={30}/>
                            </Typography>
                        </Grid>
    
                        <Grid item xs={2}>
                            <Typography variant="body2" color="text.secondary">
                                2 <FaBath size={30} />
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <h1 className="details-space">
                                Space Here sqm
                            </h1>
                        </Grid>

                        <Grid item xs={12}>
                            <h1 className="details-price">
                                Price Here$/Month
                            </h1>
                        </Grid>

                        <Grid item xs={12}>
                            <p className="details-description">
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Grid>

                        <Grid item xs={12}>
                        <Typography variant="body2" className="agent">
                              <b>Agent</b>
                            </Typography>
                            <p className="agent-name">
                            Mohammad Zaraket
                            </p>
                        </Grid>

                        <Grid item xs={12}>
                           
                        <TourModal /> 
                        </Grid>

                        <Grid item xs={12}>

                        <p className="agent-name">
                            Location
                        </p>
                      
                        </Grid>


                    </Grid>
                </Grid>

            </Grid>
       
        </div>

  );
}

export default Details;