import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardMedia, Link} from "@mui/material";


type Props = {
    title?: string,
    desc?: string,
    img?: string,
    url?: string
}

const NewsItem = (props: Props) => {
    return (
        <Card sx={{minWidth: 275}}>
            <CardMedia
                sx={{height: 140}}
                image={props.img}
                title={props.title}
            />
            <CardContent>
                <Typography sx={{fontSize: 42, lineHeight: 1, fontWeight: "bold"}} color="text.secondary" gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={props.url} target={"_blank"} rel="noopener" sx={{padding: 1}}>Learn More</Link>
            </CardActions>
        </Card>
    )
}

export default NewsItem
