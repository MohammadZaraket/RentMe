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


export default function AddApartment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column",justifyContent: "center"}} >
      <Button className="request-btn" type="submit" variant="contained" color="primary" onClick={handleOpen}  fullWidth> <b>Add Apartment</b>  </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 775, height:575 }}>
         
        <Grid container spacing={1}>

                  <Grid item xs={6}>
                   <h1> Add Property </h1>
                  </Grid>
                  <Grid item xs={6} style={{justifyContent: "right", display: "flex"}}>
                  <Button onClick={handleClose}> <GrClose size={30} /> </Button>
                  </Grid>
        
        </Grid>

          <Grid container spacing={1} style={{padding:"2% 0%"}}>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Title </b> 
                  </Typography> 
                  <TextField className="modal-field"  placeholder="Apartment Name"  variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>BedRooms </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="BedRooms"  variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>BathRooms </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="BathRooms"  variant="outlined"  fullWidth required />
                </Grid>

              </Grid>
              
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
               
              <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Location </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Location"  variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Price </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Price in $/Month"  variant="outlined"  fullWidth required />
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Space </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Space in m²"  variant="outlined"  fullWidth required />
                </Grid>

              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
               
              <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Description </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Description"  variant="outlined"  fullWidth required />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
               
              <Grid item xs={12}>
                  <Typography variant="body2"  component="p" gutterBottom>
                    <b>Price </b> 
                  </Typography> 
                  <TextField className="modal-field" placeholder="Price"  variant="outlined"  fullWidth required />
                </Grid>

              </Grid>
            </Grid>



            <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
            <Button className="request-btn" style={{padding:"10px 20px"}} type="submit" variant="contained" color="primary"> <b> Add Apartment </b> </Button>
            </Grid>
           
          </Grid>
          
         
        </Box>
      </Modal>
    </div>
  );
}