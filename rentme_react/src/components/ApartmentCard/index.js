import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch,FaBed,FaBath } from "react-icons/fa";
import { Grid} from '@mui/material/';



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

function ApartmentCard() { 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
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


export default ApartmentCard;