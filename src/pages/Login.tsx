import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

type Props = {}

const Login = (props: Props) => {
    const {authenticated, setAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = () => {

        setAuthenticated(true);
        navigate("/");
        console.log('submit')
    }
    return (
        <Container component="div" maxWidth="xs">
            <Button
                fullWidth
                variant="contained"
                onClick={() => handleSubmit()}
            >
                Sign In
            </Button>
        </Container>
    );
}

export default Login
