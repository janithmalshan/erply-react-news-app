import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import axios from 'axios';
import {CircularProgress} from "@mui/material";

type Props = {}

const Home = (props: Props) => {
    const {authenticated, token} = useContext(AuthContext);

    console.log('authenticated', authenticated)
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])
    const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + token;
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            await axios.get(url).then((response) => {
                setData(response.data.articles);
            })
            console.log("::::loading")
            setIsLoading(false)
        } catch (e) {
            console.log("ERROR", e) //TODO show error
        }
    }
    console.log(data)
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
                {isLoading && <h1>Loading <CircularProgress color="success" /></h1>}
                {data.map((item, index) => {
                    // @ts-ignore
                    return <h1 key={index}>{item.title}</h1>
                })}
            </Box>
        </Container>
    );
}

export default Home
