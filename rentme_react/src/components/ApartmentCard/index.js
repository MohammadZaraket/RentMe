import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch,FaBed,FaBath } from "react-icons/fa";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';



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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  if(!props.editable)
  {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
            component="img"
            height="194"
            image="../../assets/test.jpg"
            alt="Paella dish"
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
                    {props.space}  m²
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
    
      );
  }

  else{

    return(
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
            component="img"
            height="194"
            image="../../assets/test.jpg"
            alt="Paella dish"
            style={{padding:"10px"}}
          />
          <CardHeader
            
            id="apartment-title"
          />
        
          
          <CardContent>
          <TextField  value={props.name} variant="outlined" required />
          <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.bedrooms} variant="outlined" required /> 
                        </Grid>
                        <Grid item xs={6}>
                            <FaBed size={50}/>
                        </Grid>
                    </Typography>
                  </Grid>
        
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary"  style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.bathrooms} variant="outlined" required /> 
                        </Grid>
                        <Grid item xs={6}>
                            <FaBath size={50} />
                        </Grid>
                    </Typography>
                  </Grid>
    
                  <Grid item xs={6}>
                    <Typography variant="body2" className="apartment-space" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.space} variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                             m²
                        </Grid>
                    </Typography>
                  </Grid>
    
                  <Grid item xs={6}>
                    <Typography variant="body2"  className="apartment-price" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value={props.price}  variant="outlined" required />
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
                <TextField multiline value={props.description} variant="outlined" fullWidth required /> 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    
    );
  }

}


export default ApartmentCard;