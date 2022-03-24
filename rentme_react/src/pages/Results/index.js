import Navbar from '../../components/Navbar'
import ApartmentCard from '../../components/ApartmentCard'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";
import React, { useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

function Results() {

    const parameters = useSelector(state => state.credentials);
    const [apartments, setApartments] = useState([{"status": false,"message": "Searching"}]);
    const [longitude, setLongitude] = useState(parameters[0].longitude);
    const [latitude, setLatitude] = useState(parameters[0].latitude);
    const [bedrooms, setBedrooms] = useState(parameters[0].bedrooms);
    const [price, setPrice] = useState(parameters[0].price);

console.log(longitude);
console.log(latitude);
console.log(bedrooms);
console.log(price);

const saveRooms = (event) => {
    setBedrooms(event.target.value);
};

const savePrice = (event) => {
    setPrice(event.target.value);
  };


useEffect(() => {

    getAllApartments();

},[]);

async function  getAllApartments(){

   const credentials = {longitude,latitude,bedrooms,price};

    const response = await axios.post("http://127.0.0.1:8000/api/apartment/search", credentials);

    if(response.data.status==true){
        setApartments(response.data.apartments);
        }
    else{
        setApartments([{"status": false,"message": "No Apartments found With Such Conditions!"}]);
    }
   
}


  return (

    <div className='Result-background'>
        <Navbar />

        <Grid container spacing={2} style={{padding:"4%"}}>
            
              <Grid item xs={12}  style={{display:"block"}} >
                <form className="search-results">
                    <Grid item xs={6} className="results-search-item" >
                    <TextField style={{backgroundColor:"white"}} id="search-in-results" placeholder="Where Do You Want To Live Next?"  variant="outlined"  fullWidth required />
                    </Grid>
                    <Grid item xs={2} className="results-search-item" >
                        <Box className="drop-down" fullWidth>
                                <FormControl fullWidth >
                                <InputLabel><b>Minimum Bedrooms</b></InputLabel>
                                    <Select value={bedrooms} onChange={saveRooms}>
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
                        <Grid item xs={2} className="results-search-item" >
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
                    <Grid item xs={2} className="results-search-item">
                    <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Find Now!</Button>
                    </Grid>
           
                </form>
              </Grid>

            <Grid item xs={12} style={{color:"white",display:"block"}}>
                <h1 className="result_title">Search Results</h1>
                <h4 className="result_title">Apartments Found {apartments.length}</h4>
            </Grid>

                {
                     apartments.map(function(apartments,i){
                         if(apartments.message){
                            return(
                                <Grid item xs={12} md={3} sm={6} style={{color:"white",display:"block"}}>
                                    <h1>{apartments.message}</h1>
                                    </Grid>
                            ) 
                         }
                         else{
                            return(
                                <Grid item xs={12} md={3} sm={6} style={{color:"white",display:"block"}}>
                                    <ApartmentCard editable = {false} key={i} apartment_key={apartments.id} name={apartments.name} bedrooms={apartments.bedrooms} bathrooms={apartments.bathrooms} space={apartments.space} price={apartments.price}  description={apartments.description} image={apartments.apartment_images[0].image} />
                                </Grid>
                            ) 
                         }
                           
                        })
                }
        
        </Grid>
       
        </div>

  );
}

export default Results;