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
import axios from "axios";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import ruLocale from 'date-fns/locale/ru';


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


export default function AddApartmentModal() {

    var [alertStyle,setAlertStyle] = useState({display:'none'});
    //Adding Apartment Parameters
    const [name, setName] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [price, setPrice] = useState('');
    const [space, setSpace] = useState('');
    const [description, setDescription] = useState('');
    const [longitude, setLongitude] = useState('35.505192');
    const [latitude, setLatitude] = useState('33.873252');
    const [date, setDate] = useState(['']);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [user_id, setUser_id] = useState(localStorage.getItem('access_token'));
    const [imagesuploaded, setImagesuploaded] = useState([]);
    var images=[];

    const [value, setValue] = React.useState(null);
    const config = {
        headers: { Authorization: `Bearer ${user_id}` }
    };


    async function addApartment(){

        for(let i=0; i<imagesuploaded.length; i++)
        {
            images.push(imagesuploaded[i].dataURL);
        }

        if(name=="" || bathrooms=="" || bedrooms==""|| price==""|| space==""|| description==""|| longitude==""|| latitude==""|| date=="" || from==""  || to==""  || images=="" )
        {  
            setAlertStyle({color: 'red', display:"flex"});
            return false;
        }
       
        const data ={name,bathrooms,bedrooms,price,space,description,longitude,latitude,date,from,to,images};
        console.log(data);


       /*  try {
             const response = await axios.post("http://127.0.0.1:8000/api/apartment/add", data,config);
            return response.data;
             
        } catch (error) {
            console.error("Error", error.response);
             return false;
        }
          */
         console.log(date);
    };
    
    const [open, setOpen] = useState(false);
    const maxNumber = 3; // Maximum number of Images a User can upload for ONE apartment

    const stackImages = (imageList, addUpdateIndex) => {
      console.log(imageList);
      setImagesuploaded(imageList);
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
                <h4 style={alertStyle}>*Please Enter All Fields</h4>
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
                  <TextField className="modal-field"  placeholder="Apartment Name"  variant="outlined" onInput={e => setName(e.target.value)} fullWidth required />
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>BedRooms</b> 
                    </Typography> 
                    <Box >
                        <FormControl fullWidth >
                            <Select onChange={e => setBedrooms(e.target.value)}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>BathRooms </b> 
                    </Typography> 
                    <Box fullWidth>
                        <FormControl fullWidth >
                            <Select onChange={e => setBathrooms(e.target.value)}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>Price </b> 
                    </Typography> 
                    <TextField className="modal-field" placeholder="$/Month"  variant="outlined" onInput={e => setPrice(e.target.value)} fullWidth required />
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>Space </b> 
                    </Typography> 
                    <TextField className="modal-field" placeholder="m²"  variant="outlined" onInput={e => setSpace(e.target.value)} fullWidth required />
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
                        <b>Availability </b> 
                    </Typography> 
                    <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                        <DatePicker  value={date}  onChange={(newDate) => { setDate(newDate);}} renderInput={(params) => <TextField {...params} variant="outlined" />}  views={["year", "month", "day"]} format="DD-MM-YYYY" mask="__/__/____"/>
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>From </b> 
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                            <TimePicker value={from} onChange={(newFrom) => setFrom(newFrom)} renderInput={(params) => <TextField {...params} />} />
                        </LocalizationProvider>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>To </b> 
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                            <TimePicker value={to} onChange={(newTo) => setTo(newTo)} renderInput={(params) => <TextField {...params} />} />
                    </LocalizationProvider>
                </Grid>               

              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="body2"  component="p" gutterBottom>
                        <b>Description </b> 
                    </Typography> 
                    <TextField className="modal-field" placeholder="Description"  variant="outlined" onInput={e => setDescription(e.target.value)} fullWidth required />
                   
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="body2"  component="p" gutterBottom>
                            <b>Images </b> 
                        </Typography> 
                        <ImageUploading multiple value={imagesuploaded} onChange={stackImages} maxNumber={maxNumber} >
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
                    <Button className="request-btn" style={{padding:"10px 20px"}} type="submit" variant="contained" onClick={addApartment} color="primary"> <b> Add Apartment </b> </Button>                
                 
                </Grid>
               
           </Grid>
          </Grid>   
        </Box>
      </Modal>
    </div>
  );
}