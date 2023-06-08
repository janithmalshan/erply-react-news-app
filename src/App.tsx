import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {AuthProvider} from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar/>
                <Main>
                    <Routes/>
                </Main>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
