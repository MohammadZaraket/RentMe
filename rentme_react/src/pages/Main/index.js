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
import { useNavigate } from 'react-router-dom';

import Axios from "axios";

import { useDispatch, useSelector } from 'react-redux';

function Main() {

    const navigate = useNavigate();
    const [rooms,setRooms] = useState('');
    const [price, setPrice] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const API_KEY = process.env.API_KEY;

    //console.log(API_KEY);
    const [city, setCity] = useState('');

   const parameters = useSelector(state => state.credentials);
   parameters[0].bedrooms=rooms;
   parameters[0].price=price;
   parameters[0].longitude=longitude;
   parameters[0].latitude=latitude;

    const saveRooms = (event) => {
        setRooms(event.target.value);
    };

    const savePrice = (event) => {
        setPrice(event.target.value);
      };


      function  getUserLocation() {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLongitude(position.coords.longitude);
            setLatitude( position.coords.latitude);
            navigate('/Results');
        });
      }

      async function getCoordinates(event) {
        event.preventDefault();

        if(city==''){
            getUserLocation();
        }
        else{
            try {
                const response = await Axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${API_KEY}`);
                setLongitude(response.data.features[0].geometry.coordinates[0]);    
                setLatitude(response.data.features[0].geometry.coordinates[1]);
              } catch (error) {
                console.log(error.response.status);
                return false;
              }
              navigate('/Results');
        }    
    }
    
  return (

    <div className='Main-background'>
        <Navbar />
        <Grid container spacing={2} >
              <Grid item xs={12} style={{color:"white", margin:"1% auto"}}>
                <Grid>
                <p className="title">Rent Me</p>
                <p className="slogan">Let Us Guide You Home</p>
                </Grid>
              </Grid>
    
              <Grid item xs={12}>
              <form className="search-form">
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField style={{backgroundColor:"white"}}  placeholder="Where To Live Next? Keep Empty To Find Nearby" onInput={e => setCity(e.target.value)} variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={12} style={{justifyContent: "space-between"}}>
                    <Grid item xs={5}>
                        <Box  className="drop-down" fullWidth>
                            <FormControl className='form-dropdown'  fullWidth >
                            <InputLabel><b>Min Bedrooms</b></InputLabel>
                                <Select value={rooms} onChange={saveRooms} style={{backgroundColor:"#CCCCCC",padding:"6.5px 0"}}>
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
                            <FormControl className='form-dropdown' fullWidth>
                            <InputLabel> <b>Max Price</b></InputLabel>
                                <Select value={price} onChange={savePrice} style={{backgroundColor:"#CCCCCC",padding:"6.5px 0"}}>
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
                  <Button className="search-btn" type="submit" variant="contained" color="primary"  onClick={getCoordinates} fullWidth>Find Now!</Button>
                </Grid>
                
            </Grid>
             </form>
             </Grid>   
                <div className='iconsdiv'>
                    <FaFacebookSquare className='main-icon' size={30}/>
                    <FaInstagram className='main-icon' size={30} />
                    <FaTwitterSquare className='main-icon' size={30}/>
                </div>
                

                    
          </Grid>
    </div>

  );
}

export default Main;