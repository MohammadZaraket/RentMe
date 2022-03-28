import * as React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Modal,Box } from '@mui/material/';
import { GrClose } from "react-icons/gr";
import { useState, useEffect} from 'react';
//e7SLf04kUXoj18crCEAMzi:APA91bGZXtDeMuSZ8Db2m-jlhogxO35KcYzEf6fY_7AWDYa7_7_rVVmflYphhcJUY9HCFluC-GoJHyLbeHORO8Bu8WAfuhUhCiXA2NdRg6ekAGwMWRzfk5umuN3Mr2X-Sd5ERnNIyRFT


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function TourModal(props) {

  const [open, setOpen] = useState(false);
  const [name,setName] = useState("me");
  const [date,setDate] = useState("28/3/2022");
  const [number,setNumber] = useState("71965233");
  const [time,setTime] = useState("10:00");
  const message = name + " with phone number: " + number + " will be visiting your Apartment on: " +  date + " at: " + time;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function sendNotification(){
    let body = {
      to: props.Token,
      notification:{
        title:"Appointment For Apartment Tour",
        body: message
      },
      content_available: true,
      priority: 'high'
    }

    let options= {
      method: "POST",
      headers: new Headers({

        Authorization:"key=AAAAdmgizV4:APA91bH-3i_Ipyxf7k0TQ6Q4T_Db-cbUHGP8yyTgTe973fvL2P4wv5J6PEcbVIe5yOcPa1Hezzw63FXj1YUo8Zkl5W_gNeXaIY2nE8q0x9MclQWKwM8dyM7PgebUsiZ9nzcnsDPjEPgD",
        "Content-Type":"application/json"

      }),
      body: JSON.stringify(body)
    }

    fetch("https://fcm.googleapis.com/fcm/send", options).then(res =>{
     
      console.log(res);
     // console.log("SENT");

    }).catch(e => console.log(e))


    //console.log(body);
  }

  return (
    <div>
      <Button className="request-btn" type="submit" variant="contained" color="primary" onClick={handleOpen}  fullWidth> <b>Request Tour</b>  </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 775, height:575 }}>
         
        <Grid container spacing={1}>
                  <Grid item xs={6}>
                   <h1> Request Tour  </h1>
                  </Grid>
                  <Grid item xs={6} style={{justifyContent: "right", display: "flex"}}>
                  <Button onClick={handleClose}> <GrClose size={30} /> </Button>
                  </Grid>
        </Grid>
          <Grid container spacing={1} style={{padding:"5% 0%"}}>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Full Name </b> 
                  </Typography> 
                  <TextField className="modal-field"  placeholder="Full Name"  variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Date </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Date"  variant="outlined"  fullWidth required />
                </Grid>

              </Grid>
              
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
               
              <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Phone Number </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Phone Number"  variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Time </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Time"  variant="outlined"  fullWidth required />
                </Grid>

              </Grid>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="body2"  component="p" gutterBottom>
                    <b>Message </b> 
                </Typography> 
                  <TextField className='modal-field'  value="Hi, I saw your apartment offer on RentMe, and I’m really excited to have a tour." variant="outlined"  fullWidth required />
            </Grid>

            <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
            <Button className="request-btn" style={{padding:"10px 20px"}} type="submit" variant="contained" onClick={sendNotification} color="primary"> <b>Request Tour</b> </Button>
            </Grid>
           
          </Grid>
          
         
        </Box>
      </Modal>
    </div>
  );
}