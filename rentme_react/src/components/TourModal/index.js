import * as React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Modal,Box } from '@mui/material/';
import { GrClose } from "react-icons/gr";



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


export default function TourModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <Button className="request-btn" style={{padding:"10px 20px"}} type="submit" variant="contained" color="primary"> <b>Request Tour</b> </Button>
            </Grid>
           
          </Grid>
          
         
        </Box>
      </Modal>
    </div>
  );
}