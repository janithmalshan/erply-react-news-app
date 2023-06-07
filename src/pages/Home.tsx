import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

type Props = {}

const Home = (props: Props) => {
    const {authenticated} = useContext(AuthContext);

    console.log('authenticated', authenticated)
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Home
                </Typography>

            </Box>
        </Container>
    );
}

export default Home
