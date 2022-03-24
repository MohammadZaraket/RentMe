import Navbar from '../../components/Navbar'
import './Main.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch } from "react-icons/fa";
import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { RoomService } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';




function Main() {

    const navigate = useNavigate();
    const [rooms,setRooms] = useState('');
    const [price, setPrice] = useState('');

    const saveRooms = (event) => {
        setRooms(event.target.value);
    };

    const savePrice = (event) => {
        setPrice(event.target.value);
      };

  return (

    <div className='Main-background'>
        <Navbar />
        <Grid container spacing={2} style={{padding:"auto",margin:"auto"}}>
              <Grid item xs={12} style={{color:"white", margin:"auto"}}>
                <Grid>
                <p className="title">Rent Me</p>
                <p className="slogan">Let Us Guide You Home</p>
                </Grid>
              </Grid>
    
              <Grid item xs={12}>
              <form className="search-form">
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField style={{backgroundColor:"white"}}  placeholder="Where Do You Want To Live Next? "  variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={12} style={{justifyContent: "space-between"}}>
                    <Grid item xs={5}>
                        <Box  className="drop-down" fullWidth>
                            <FormControl fullWidth >
                            <InputLabel><b>Minimum Bedrooms</b></InputLabel>
                                <Select value={rooms} onChange={saveRooms}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item xs={5}>
                        <Box className="drop-down" fullWidth>
                            <FormControl fullWidth>
                            <InputLabel> <b>Maximum Price</b></InputLabel>
                                <Select value={price} onChange={savePrice}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                                <MenuItem value={200}>200</MenuItem>
                                <MenuItem value={300}>300</MenuItem>
                                <MenuItem value={400}>400</MenuItem>
                                <MenuItem value={500}>500</MenuItem>
                                <MenuItem value={600}>600</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
            
                </Grid>
                
                <Grid item xs={12}>
                  <Button className="search-btn" type="submit" variant="contained" color="primary"  onClick={() => {navigate('/Results');}} fullWidth>Find Now!</Button>
                </Grid>
                
                <div className='iconsdiv'>
                    <FaFacebookSquare  size={42}/>
                    <FaInstagram size={42} />
                    <FaTwitterSquare size={42}/>
                </div>
                
              </Grid>
             </form>
              </Grid>          
          </Grid>
    </div>

  );
}

export default Main;