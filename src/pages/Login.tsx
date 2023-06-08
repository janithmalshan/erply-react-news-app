import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {Alert, AlertTitle, Snackbar} from "@mui/material";

type Props = {}

const Login = (props: Props) => {
    const {authenticated, setAuthenticated, token, setToken} = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
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
            setOpen(true)
        });
        if (authenticated) {
            navigate("/");
        }
    }
    return (
        <Container component="div" maxWidth="xs">
            <Snackbar open={open} autoHideDuration={3} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert severity="warning" onClose={() => {setOpen(false)}}>
                    <AlertTitle>Token couldn't found!</AlertTitle>
                    <strong>Don't have a token? <Link href="https://newsapi.org/register" variant="body2" target={"_blank"}>
                    {"Get it FREE!"}
                </Link></strong>
                </Alert>
            </Snackbar>
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
                <Box component="form" sx={{mt: 1}} noValidate={true} autoComplete="off">
                    <TextField
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        required
                    />
                    <TextField
                        fullWidth
                        name="token"
                        label="Token"
                        id="token"
                        onChange={(e) => setToken(e.target.value)}
                        required
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
                                {"Don't have a token? Get it FREE!"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login
