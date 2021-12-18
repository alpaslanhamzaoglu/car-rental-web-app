import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

document.body.style.background = "#9caeff"

function Home() {
    const navigate = useNavigate();


    const theme = createTheme(theme, {
        typography: {
          pa1: {
            color: 'red'
          },
        }
    });

    const pages = ['Create an Advert', 'Adverts Listing', 'Car Rental'];
    const settings = ['Login', 'Register', 'Profile', 'Logout'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [namePage, setPage] = React.useState("");

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (name) => {
        setAnchorElNav(null);
        setPage(name);
        if(namePage === 'Create an Advert'){
            navigate("/advertcreation");
        }
        if(namePage === 'Adverts Listing'){
            navigate("/advertlisting");
        }
        if(namePage === 'Car Rental'){
            navigate("/carrental");
        }
        if(namePage === 'Login'){
            navigate("/login");
        }
        if(namePage === 'Register'){
            navigate("/register");
        }
        if(namePage === 'Profile'){
            navigate("/profile");
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar variant="dense">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            style={{color: "rgb(144,0,0)", fontSize: 30}}
                        >
                            AGA Carpooling
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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            style={{color: "rgb(144,0,0)", fontSize: 30}}
                        >
                            AGA Carpooling
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseNavMenu(setting)}>
                                <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
      );

    // return (
    //     <div>
    //         <div>Home</div>
    //         <div>
    //             <Link to="/login">Login</Link>
    //         </div>
    //         <div>
    //             <Link to="/register">Register</Link>
    //         </div>
    //         <div>
    //             <Link to="/profile">Profile</Link>
    //         </div>
    //         <div>
    //             <Link to="/advertcreation">Advert Creation</Link>
    //         </div>
    //         <div>
    //             <Link to="/advertlisting">Advert Listing</Link>
    //         </div>
    //         <div>
    //             <Link to="/carrental">Car Rental</Link>
    //         </div>
    //         <div>
    //             <Link to="/purchase">Purchase</Link>
    //         </div>
    //     </div>

    // );
}

export default Home;