import React from 'react';
import {Container} from "@mui/material";
import {ReactNode} from "react";

type Props = {
    children?: ReactNode;
}

const Main = (props: Props) => {
    return (
        <main>
            <Container maxWidth={false}>
                {props.children}
            </Container>
        </main>
    );
}

export default Main
