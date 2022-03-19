import * as React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Modal,Box } from '@mui/material/';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
        <Box sx={{ ...style, width: 400 }}>

        <Grid container spacing={2} style={{padding:"4%"}}>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <h1 className='details-title'>testing adding components in modal</h1>
                            <hr className='line' />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant="body2" color="text.secondary">
                              testtt
                            </Typography>
                        </Grid>
    
                        <Grid item xs={2}>
                            <Typography variant="body2" color="text.secondary">
                                tessss
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <h1 className="details-space">
                              leoeleoeoleoe
                            </h1>
                        </Grid>

                        <Grid item xs={12}>
                            <h1 className="details-price">
                                leoeieoekooelo
                            </h1>
                        </Grid>

                        <Grid item xs={12}>
                            <Button className="request-btn" type="submit" variant="contained" color="primary"  fullWidth> <b>Request Tour</b> </Button>
                        </Grid>


                    </Grid>
                </Grid>

            </Grid>


          <Button onClick={handleClose}>Close this modal</Button>
        </Box>
      </Modal>
    </div>
  );
}