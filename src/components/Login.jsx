import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Body from './Body';

const defaultTheme = createTheme();
const token = localStorage.getItem('token');

export default function SignIn() {

    // const [isUser, setUser] = useState(false);

    // const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        if (email === "xyz@gmail.com" && password === "xyz123") {
            localStorage.setItem('token', JSON.stringify({email: email, password:password}));
            window.location.reload(1);
            // setUser(true)
        }
    };

    return (
        <>
       
    
        {/* {isUser ? <Body /> : */}
        <div className="parentlogin">
            <div className='leftlogin'>
                <div className='img_container'>
                    <img src="assets/bg1.png" alt="xyz" />
                </div>

                <div className='img_container'>
                    <img src="assets/bg2.png" alt="xyz" />
                </div>
            </div>
            <div className="rightlogin">
                <ThemeProvider theme={defaultTheme}  >
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className='loginblock'>
                            <div className='login_header_img'>
                                <img src="assets/Vector.png" alt="xyz" />
                            </div>
                            <div className='login_header_name'>
                                <p className='name'>Chatbot<br></br> Management System</p>
                            </div>
                        </div>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <div className="adminlogin">
                                Super Admin Login
                            </div>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                                <label className='label' for="email"> Enter Email Address</label>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus

                                    style={{ marginBottom: '1rem', marginTop: '1rem' }}
                                />
                                <label className='label' for="email">Password</label>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"

                                    style={{ marginBottom: '0.5rem', marginTop: '1rem' }}
                                />
                                <Grid container>
                                    <div className="rememberforget">
                                        <div>
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" style={{
                                                    transform: "scale(0.8)", marginLeft: '-0.5rem',
                                                }} />}
                                                label="Remember me"
                                                // className='rememberme'
                                                style={{
                                                    transform: "scale(0.9)"
                                                }}
                                            />
                                            {/* <div className='rememberme'>
                                    <Checkbox value="remember" color="primary" style={{
                                            transform: "scale(0.8)", marginLeft: '-0.7rem',
                                        }}/>
                                    Remember me
                                    </div> */}
                                        </div>
                                        <div style={{ marginTop: '0.6rem' }}>
                                            <Link href="#">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>
                                </Grid>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className='button'
                                >
                                    Sign In
                                </Button>

                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider >
            </div>
        </div>
    </>

    );
}






