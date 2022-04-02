import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaBed,FaBath } from "react-icons/fa";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import axios from "axios";

const ExpandMore = styled((props) => {

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ApartmentCard(props) { 

    const [name, setName] = useState(props.name);
    const [bathrooms, setBathrooms] = useState(props.bathrooms);
    const [bedrooms, setBedrooms] = useState(props.bedrooms);
    const [price, setPrice] = useState(props.price);
    const [space, setSpace] = useState(props.space);
    const [description, setDescription] = useState(props.description);
    const [longitude, setLongitude] = useState(props.longitude);
    const [latitude, setLatitude] = useState(props.latitude);

    const apartment_key = props.apartment_key;
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

   const image_url ="http://127.0.0.1:8000/Images/"+ props.image;

   function goDetails() { navigate("/Details/"+apartment_key);};

   async function editApartmentInfo(event){
    event.preventDefault();
    const id = apartment_key;
    const data ={id,name,bathrooms,bedrooms,price,space,description,longitude,latitude};

     try {
         const response = await axios.post("http://127.0.0.1:8000/api/apartment/update", data);
         return response.data;
         
    } catch (error) {
         console.error("Error", error.response);
         return false;
    }

    }

    async function deleteApartment(){
        const id = apartment_key;
        const data ={id};
    
         try {
             const response = await axios.post("http://127.0.0.1:8000/api/apartment/delete", data);
            return response.data;
             
        } catch (error) {
            console.error("Error", error.response);
             return false;
        }
    
        }

  if(!props.editable)
  {
    return (
        <div onClick={goDetails} style={{cursor:"pointer"}}>
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
            component="img"
            height="194"
            image={image_url}
            alt="Apartment Image"
            style={{padding:"10px"}}
          />
          <CardHeader
            title={props.name}
            id="apartment-title"
          />
          
          <CardContent>
          <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary"  style={{fontSize:"40px"}}>
                    {props.bedrooms} <FaBed size={30}/>
                    </Typography>
                  </Grid>
        
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary"  style={{fontSize:"40px"}}>
                    {props.bathrooms} <FaBath size={30} />
                    </Typography>
                  </Grid>
    
                  <Grid item xs={12}>
                    <Typography variant="body2" className="apartment-space">
                    {props.space} m²
                    </Typography>
                  </Grid>
    
                  <Grid item xs={12}>
                    <Typography variant="body2"  className="apartment-price">
                    {props.price} $/Month
                    </Typography>
                  </Grid>
    
            </Grid>
          </CardContent>
    
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph> <p>Description:</p></Typography>
              <Typography paragraph>
              {props.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    
      );
  }

  else{

    return(
        <div>
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
            component="img"
            height="194"
            image={image_url}
            alt="Apartment Image"
            style={{padding:"10px"}}
          />
          <CardHeader
            
            id="apartment-title"
          />
        
          
          <CardContent>
          <TextField  value={props.name} onInput={e => setName(e.target.value)} variant="outlined" required />
          <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.bedrooms} onInput={e => setBedrooms(e.target.value)} variant="outlined" required /> 
                        </Grid>
                        <Grid item xs={6}>
                            <FaBed size={50}/>
                        </Grid>
                    </Typography>
                  </Grid>
        
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary"  style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.bathrooms} onInput={e => setBathrooms(e.target.value)} variant="outlined" required /> 
                        </Grid>
                        <Grid item xs={6}>
                            <FaBath size={50} />
                        </Grid>
                    </Typography>
                  </Grid>
    
                  <Grid item xs={6}>
                    <Typography variant="body2" className="apartment-space" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.space} onInput={e => setSpace(e.target.value)} variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                             m²
                        </Grid>
                    </Typography>
                  </Grid>
    
                  <Grid item xs={6}>
                    <Typography variant="body2"  className="apartment-price" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.price} onInput={e => setPrice(e.target.value)} variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                        $/Month
                           
                        </Grid>
                    </Typography>
                  </Grid>
    
            </Grid>
          </CardContent>
    
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph><b>Description:</b></Typography>
              <Typography paragraph>
                <TextField multiline value={props.description} onInput={e => setDescription(e.target.value)} variant="outlined" fullWidth required /> 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Button className="editbtn" type="submit" variant="contained" color="primary" onClick={editApartmentInfo} fullWidth>Edit</Button>
        <Button className="deletebtn" type="submit" variant="contained" color="primary" onClick={deleteApartment}  fullWidth>Delete</Button>
        </div>
    
    );
  }

}


export default ApartmentCard;