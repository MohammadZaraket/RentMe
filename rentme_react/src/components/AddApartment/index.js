import { Grid, TextField, Button, Typography, Modal,Box } from '@mui/material/';
import { GrClose } from "react-icons/gr";

import React, { useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {BiImageAdd} from "react-icons/bi";
import {MdDelete} from "react-icons/md";

import ImageUploading from "react-images-uploading";


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

    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [open, setOpen] = useState(false);
    const [image,setImage] = useState('');
    const maxNumber = 3; // Maximum number of Images a User can upload for ONE apartment

    const stackImages = (imageList, addUpdateIndex) => {
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

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
        <Box sx={{ ...style, width: 775, height:600 }}>
        <Grid container spacing={0}>

            <Grid item xs={6}>
                <h1> Add Property </h1>
            </Grid>
            <Grid item xs={6} style={{justifyContent: "right", display: "flex"}}>
                <Button onClick={handleClose}> <GrClose size={30} /> </Button>
            </Grid>
    
        </Grid>

        <Grid container spacing={0} style={{padding:"1% 0%"}}>

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
                        <b>BedRooms</b> 
                    </Typography> 
                    <Box fullWidth>
                        <FormControl fullWidth >
                            <Select>
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

                <Grid item xs={6}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>BathRooms </b> 
                    </Typography> 
                    <Box fullWidth>
                        <FormControl fullWidth >
                            <Select>
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

            <Grid item xs={12} sm={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>Description </b> 
                    </Typography> 
                    <TextField className="modal-field" placeholder="Description"  variant="outlined"  fullWidth required />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="body2"  component="p" gutterBottom>
                            <b>Images </b> 
                        </Typography> 
                        <ImageUploading multiple value={images} onChange={stackImages} maxNumber={maxNumber} dataURLKey="data_url">
                        {({imageList, onImageUpload, onImageRemove, isDragging, dragProps}) => (
                            <div className="upload-image-wrapper"  {...dragProps}>
                                <button className="upload-btn" onClick={onImageUpload} >
                                <BiImageAdd size={35} />
                                </button>
                                &nbsp;
                                {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" width="75" height="75" />
                                    <button className="remove-btn" onClick={() => onImageRemove(index)}><MdDelete size={25}/></button>
                                </div>
                                ))}
                            </div>
                        )}
                        </ImageUploading>
                    </Grid>
              </Grid>

                <Grid item xs={12} style={{display:"flex",justifyContent:"center",marginTop:"25px"}}>
                    <Button className="request-btn" style={{padding:"10px 20px"}} type="submit" variant="contained" color="primary"> <b> Add Apartment </b> </Button>
                </Grid>

           </Grid>
          </Grid>   
        </Box>
      </Modal>
    </div>
  );
}