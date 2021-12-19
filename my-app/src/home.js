import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
// import './login.css';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Form, Row, Button, Col, Dropdown } from 'react-bootstrap';

import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
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

    let logout = async () => {
        const response = await fetch('http://localhost:3001/logout');
        const data = await response.json();

        console.log(data);
    };

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
        if(namePage == 'Logout'){
            logout();
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [destination, setDestination] = React.useState("");
    const [departure, setDeparture] = React.useState("");
    const [adate, setDate] = React.useState("");
    const [motorcycleCheck, setMotor] = React.useState(false);
    const changeVeh = () => setMotor(!motorcycleCheck);
    const handleSearch = () => {
        navigate("/advertlisting", { state: {destinationS: destination, departureS: departure, adateS: adate, motorcycleCheckS: motorcycleCheck, page: "home"} })
    };
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        justifyContent:'center',
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 12,
          height: 12,
          borderRadius: 6,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));

    return (
        <div>
            <div>
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
                                        <Avatar alt="User" src="/static/images/avatar/2.jpg" />
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
            </div>

            <div class="container">
                <div class="row">
                    <div class="col align-self-center" className="gee"><svg xmlns="http://www.w3.org/2000/svg" width="4%" height="auto" fill="rgb(144, 0, 0)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /> </svg>
                    </div>
                    <Link to="/home" style={{ textDecoration: 'none' }}><div class="col align-self-center" className="p1">AGA</div></Link>
                    <div class="col align-self-center" className="p2">Car Pooling System</div>
                </div>
            </div>

            <div>
                <Container>
                    <Form>
                        <Row className="mb-3" id="firstrow">
                            <Form.Group as={Col} controlId="formGridEmail" onChange={(e) => { setDeparture(e.target.value) }}>
                                <Form.Label>Departure</Form.Label>
                                <Form.Control type="text" placeholder="Enter where you are going from" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" onChange={(e) => { setDestination(e.target.value) }}>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Enter where you are going to" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip" onChange={(e) => { setDate(e.target.value) }}>
                                <Form.Label>Choose your travel date</Form.Label>
                                <Form.Control type="date" placeholder="Enter the date of travel"/>
                            </Form.Group>
                        </Row>

                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" marginBottom={2}>
                            <Typography>Motorcycle</Typography>
                            <AntSwitch checked={!motorcycleCheck} onChange={changeVeh} inputProps={{ 'aria-label': 'ant design' }} />
                            <Typography>Car</Typography>
                        </Stack>

                        <Button className="buttons2" variant="primary" onClick={handleSearch}>
                            Search
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
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