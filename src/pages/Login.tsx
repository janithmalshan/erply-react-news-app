import React, {useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

type Props = {}

const Login = (props: Props) => {
    const {authenticated, setAuthenticated, token, setToken} = useContext(AuthContext);
    const navigate = useNavigate();
//b2a883c8139c457f85c1a1df484d278e
    const handleSubmit = () => {
        const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=' + token;
        axios.get(url).then(r => {
            if (r.data.status == "ok") {
                setAuthenticated(true);
                navigate("/")
            }
        }).catch(function (error) {
            // navigate to login page if token invalid
            navigate("/login")
        });
        if (authenticated) {
            navigate("/");
        }
    }
    return (
        <Container component="div" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Button>test</Button>
                <Box component="form" sx={{mt: 1}}>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                    />
                    <TextField
                        fullWidth
                        name="token"
                        label="Token"
                        id="token"
                        onChange={(e) => setToken(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="https://newsapi.org/register" variant="body2" target={"_blank"}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login
