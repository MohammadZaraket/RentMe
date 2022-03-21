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
            title="Apartment Title Here"
            subheader="Best Deal Apartment"
            id="apartment-title"
          />
          
          <CardContent>
          <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                         4 <FaBed size={30}/>
                    </Typography>
                  </Grid>
        
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                        2 <FaBath size={30} />
                    </Typography>
                  </Grid>
    
                  <Grid item xs={12}>
                    <Typography variant="body2" className="apartment-space">
                       Space Here
                    </Typography>
                  </Grid>
    
                  <Grid item xs={12}>
                    <Typography variant="body2"  className="apartment-price">
                        Price Here
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
              <Typography paragraph>Description:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.large plate and set aside, leaving chicken and chorizo in the pan. Add
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
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
            title="Apartment Title Here"
            subheader="Best Deal Apartment"
            id="apartment-title"
          />
        
          
          <CardContent>
          <TextField  value="Apartment Title Here" variant="outlined" required />
          <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value="4" variant="outlined" required /> 
                        </Grid>
                        <Grid item xs={6}>
                            <FaBed size={50}/>
                        </Grid>
                    </Typography>
                  </Grid>
        
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary"  style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value="2" variant="outlined" required /> 
                        </Grid>
                        <Grid item xs={6}>
                            <FaBath size={50} />
                        </Grid>
                    </Typography>
                  </Grid>
    
                  <Grid item xs={6}>
                    <Typography variant="body2" className="apartment-space" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value="Space" variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            Here
                        </Grid>
                    </Typography>
                  </Grid>
    
                  <Grid item xs={6}>
                    <Typography variant="body2"  className="apartment-price" style={{display: "flex", alignItems: "center"}}>
                        <Grid item xs={6}>
                            <TextField  value="Price" variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            Here
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
                <TextField multiline value= "Heat 1/2 cup of the broth in a pot until simmering, add saffron and se aside for 10 minutes.large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil." variant="outlined" fullWidth required /> 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    
    );
  }

}


export default ApartmentCard;