import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {NAVBAR_ROUTE} from "../../routes/constants";
import { useNavigate } from 'react-router-dom';
import AddApartment from '../AddApartment';


const Navbar = () => {

    const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="Navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography className="homebtn"
            variant="h6"
            noWrap
            component="button"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick= {() => navigate("/Main")}>
                RentMe
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >
              {NAVBAR_ROUTE.map(({name,path}) => (
                <MenuItem key={name} onClick={() => navigate(path)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography className="homebtn"
            variant="h6"
            noWrap
            component="button"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }
           }
           onClick= {() => navigate("/Main")}>
            RentMe
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="navcontent">
          {NAVBAR_ROUTE.map(({name,path}) => (
             
            <Button
                key={name}
                onClick= {() => navigate(path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className="navbtn"
              >
                {name}
              </Button>
            ))}

            
            <AddApartment />
            
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;