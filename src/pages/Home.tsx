import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import axios from 'axios';
import {CircularProgress} from "@mui/material";
import NewsItem from "../components/NewsItem";

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
            console.log(":::: loading ::::")
            setIsLoading(false)
        } catch (e) {
            console.log("ERROR", e) //TODO show error
        }
    }
    return (
        <Container sx={{ mb: 2 }} maxWidth={false}>
            <Typography sx={{ mt: 5 }} component="h1" variant="h4">
                Top news headlines...
            </Typography>
            {isLoading && <h1>:::: loading <CircularProgress color="success" /> ::::</h1>}
            <Box
                sx={{
                    marginTop: 8,
                    marginBottom: 8,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "20px",
                    alignContent: "center",
                }}
            >
                {data.map((item, index) => {
                    // @ts-ignore
                    return <NewsItem key={index} title={item.title} desc={item.content} img={item.urlToImage} url={item.url} />
                })}
            </Box>
        </Container>
    );
}

export default Home
