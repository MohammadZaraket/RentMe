import Navbar from '../../components/Navbar'
import ApartmentCard from '../../components/ApartmentCard'

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,FaSistrix } from "react-icons/fa";
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";
import React, { useState, useEffect} from 'react';


function Results() {

const [apartments, setApartments] = useState([]);




const [longitude, setLongitude] = useState('-122');
const [latitude, setLatitude] = useState('37');
const [bedrooms, setBedrooms] = useState('3');
const [price, setPrice] = useState('700');


const url = "http://127.0.0.1:8000/api/apartment/search";

useEffect(() => {

    getAllApartments();

},[]);

async function  getAllApartments(){

   const credentials = {longitude,latitude,bedrooms,price};

    await axios.post("http://127.0.0.1:8000/api/apartment/search", credentials).then((response)=> {setApartments(response.data);})
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
                    <Grid item xs={2} className="results-search-item">
                    <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Rooms</Button>
                    </Grid>
                    <Grid item xs={2} className="results-search-item">
                    <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Price</Button>
                    </Grid>
                    <Grid item xs={2} className="results-search-item">
                    <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Find Now!</Button>
                    </Grid>
           
                </form>
              </Grid>

            <Grid item xs={12} style={{color:"white",display:"block"}}>
                <h1 className="result_title">Search Results</h1>
            </Grid>
               
            
                {apartments.map(function(apartments,i){
                    return(
                        <Grid item xs={3} style={{color:"white",display:"block"}}>
                            <ApartmentCard editable = {false} key={i}/>
                            </Grid>
                    ) 
                })}
            
                 

               
            
    


           
        
        </Grid>
       
        </div>

  );
}

export default Results;