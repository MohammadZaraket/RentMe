import Navbar from '../../components/Navbar'
import TourTable from '../../components/TourTable'
import ApartmentCard from '../../components/ApartmentCard'
import { Grid } from '@mui/material/';
import React, { useState, useEffect} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MdApartment,MdTour } from "react-icons/md";
import './Profile.css'



function Profile() {

    const [user_id, setUser_id] = useState(localStorage.getItem('access_token'));
    const config = {  headers: {Authorization: `Bearer ${user_id}`} };
    const [apartments, setApartments] = useState([{"status": false,"message": "Loading"}]);
    const [tours, setTours] = useState([{"name": "Ali bitar", "phone": '03526693', "date": '6/4/2022', "time": '19:00'}]);

    
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    useEffect(() => {
        getUserApartments();
    },[]);

    async function getUserApartments(){

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/apartment/show",config);

             if(response.data){
                setApartments(response.data.Apartments);
      /*          for( let i=0; i<apartments.length; i++){

                  tours.push(apartments[i].apartment_tours);
                }
    */
                }
            else{
                setApartments([{"status": false,"message": "No Apartments Uploaded Yet!"}]);
              }
            }catch (error) {
              console.log(error.response);
              return false;
            }
          }
    

  return (

    <div className='Result-background'>
        <Navbar />

        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<MdApartment size={35} />} label="APARTMENTS" value="1" className="tab" />
            <Tab icon={<MdTour size={35} />} label="TOURS" value="2" className="tab" />
          </Tabs>

        </Box>
        <TabPanel value="1">

          <Grid container spacing={2}>
          <Grid item xs={12} style={{color:"white",display:"block"}}>
              <h1 className="result_title">User Profile</h1>
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
                    <ApartmentCard editable = {true} key={i} apartment_key={apartments.id} name={apartments.name} bedrooms={apartments.bedrooms} bathrooms={apartments.bathrooms} space={apartments.space} price={apartments.price}  description={apartments.description} image={apartments.apartment_images[0].image} longitude={apartments.longitude} latitude={apartments.latitude} />
                  </Grid>
                      ) 
                   }
                           
             })
          }
        </Grid>

        </TabPanel>

        <TabPanel value="2">

        <Grid container spacing={2}>
          <Grid item xs={12} style={{color:"white",display:"block"}}>
              <h1 className="result_title">Requested Tours</h1>
          </Grid>

        
        <Grid item xs={12} md={12} sm={12} style={{color:"white",display:"flex",padding:"5% 10%"}}>
          <TourTable tours={tours} />
         </Grid>

          </Grid>
        
        </TabPanel>
      </TabContext>
    </Box>

  </div>

  );
}

export default Profile;