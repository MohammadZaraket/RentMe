import Navbar from '../../components/Navbar'
import './Main.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,BsSearch } from "react-icons/fa";




function Main() {

  return (

    <div className='Main-background'>

        <Navbar />

        <Grid container spacing={2}>
              <Grid item xs={12} style={{color:"white", marginTop:"8%"}}>
                <Grid>
                <p className="title">Rent Me</p>
                <p className="slogan">Let Us Guide You Home</p>
                </Grid>
              </Grid>
    
              <Grid item xs={12}>
              <form className="search-form">
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField style={{backgroundColor:"white"}}  placeholder="Where Do You Want To Live Next? "  variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={6}>
                  <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Rooms</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Price</Button>
                </Grid>
                <Grid item xs={12}>
                  <Button className="search-btn" type="submit" variant="contained" color="primary"  fullWidth>Find Now!</Button>
                </Grid>
                
                <div className='iconsdiv'>
                    <FaFacebookSquare  size={42}/>
                    <FaInstagram size={42} />
                    <FaTwitterSquare size={42}/>
                </div>
                
             
           
        
               
              </Grid>
             </form>
              </Grid>

 



            
          </Grid>

    </div>


  );
}

export default Main;