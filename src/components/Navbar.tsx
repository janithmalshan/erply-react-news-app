import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const {authenticated, setAuthenticated, setToken} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        setAuthenticated(false)
        setToken("")
        navigate("/login")
    }
    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <Typography align="left" variant="h6" component="div" sx={{flexGrow: 1}}>
                    News
                </Typography>
                {authenticated && <p>{authenticated}</p>}
                {authenticated ? <Button color="inherit" onClick={handleLogout}>Logout</Button> : <Button color="inherit">Login</Button>}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
