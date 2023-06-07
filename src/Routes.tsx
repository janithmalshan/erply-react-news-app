import React, {useContext} from "react";
import {Routes as Router, Route, Navigate, Outlet} from "react-router-dom";
import Login from "./pages/Login";
import {AuthContext} from "./context/AuthContext";
import Home from "./pages/Home";

type Props = {}

const PrivateRoutes = () => {
    const {authenticated} = useContext(AuthContext)
    if (!authenticated) return <Navigate to="/login" replace/>
    return <Outlet/>
}

const Routes = (props: Props) => {
    return (
        <Router>
            <Route path="/login" element={<Login/>}/>
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Router>
    )
}

export default Routes
