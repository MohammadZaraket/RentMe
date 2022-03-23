import Navbar from '../../components/Navbar'
import ImagesCarousel from '../../components/ImagesCarousel'
import TourModal from '../../components/TourModal'
//import Map from '../../components/Map'      <Map location={location} zoomLevel={17} /> 
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch,FaBed,FaBath } from "react-icons/fa";
import axios from "axios";
import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

function Details(props) {

let {id} = useParams();
console.log(id);
const [apartment_id, setApartment_id] = useState(id);
const [apartment, setApartment] = useState([{"id": "-", "name":"-", "bathrooms":"-", "bedrooms": "-", "price": "-", "space": "-", "description": "-", "longitude": "-", "latitude": "-", "user_id": "-", "apartment_images": [{"id": "-" , "image": "-" ,"apartment_id": "-" },{"id":"-" ,"image": "-", "apartment_id":"-"}]}]);

    const location = {
        lat: apartment[0].latitude,
        lng: apartment[0].longitude,
      }

     useEffect(() => {
        getApartmentDetails();
    },[]);
    
    async function getApartmentDetails(){
       const credentials = {apartment_id};
        const response = await axios.post("http://127.0.0.1:8000/api/apartment/details", credentials);
        setApartment(response.data);

    }
    
    //console.log(apartment[0].name);

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
                                <h1 className='details-title'>{apartment[0].name}</h1>
                                <hr className='line' />
                            </Grid>
    
                            <Grid item xs={2}>
                                <Typography variant="body2" color="text.secondary" style={{fontSize:"40px"}}>
                                {apartment[0].bedrooms} <FaBed size={40}/>
                                </Typography>
                            </Grid>
        
                            <Grid item xs={2}>
                                <Typography variant="body2" color="text.secondary" style={{fontSize:"40px"}}>
                                {apartment[0].bathrooms}  <FaBath size={40} />
                                </Typography>
                            </Grid>
    
                            <Grid item xs={12}>
                                <h1 className="details-space">
                                {apartment[0].space}  sqm
                                </h1>
                            </Grid>
    
                            <Grid item xs={12}>
                                <h1 className="details-price">
                                {apartment[0].price} $/Month
                                </h1>
                            </Grid>
    
                            <Grid item xs={12}>
                                <p className="details-description">
                                {apartment[0].description} 
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