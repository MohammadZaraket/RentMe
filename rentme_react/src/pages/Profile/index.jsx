import Navbar from '../../components/Navbar'
import ApartmentCard from '../../components/ApartmentCard'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import React, { useState, useEffect} from 'react';
import axios from "axios";

function Profile() {

    const [user_id, setUser_id] = useState(localStorage.getItem('access_token'));
    const config = {
        headers: {Authorization: `Bearer ${user_id}`}
    };


    useEffect(() => {
        getUserApartments();
    },[]);

    async function getUserApartments(){

       /* try {
            const response = await axios.post("http://127.0.0.1:8000/api/apartment/show",config);
             console.log(response);
   
           } catch (error) {
             console.log(error.response);
             return false;
           }*/

           console.log(user_id);
           console.log(config);

           callAPI();
           /* const response = await axios.post("http://127.0.0.1:8000/api/apartment/show", config);
            console.log(response);*/


           /* let options= {
                method: "POST",
                headers: config
              }
          
              fetch("http://127.0.0.1:8000/api/apartment/show", options).then(res =>{
               
                console.log(res);
          
              }).catch(e => console.log(e))*/
    }

    async function callAPI(){

           const response = await axios.get("http://127.0.0.1:8000/api/apartment/show", config);
           console.log(response);
        }
    

  return (

    <div className='Result-background'>
        <Navbar />

        <Grid container spacing={2} style={{padding:"4%"}}>
         
            <Grid item xs={12} style={{color:"white",display:"block"}}>
                <h1 className="result_title">User Profile</h1>
            </Grid>

            <Grid item xs={12} style={{color:"white",display:"block"}}>
               <ApartmentCard editable={true} />
            </Grid>


           
        
        </Grid>
       
        </div>

  );
}

export default Profile;