import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

const useAuth = () => {
    const user = {loggedIn: false};
    return user && user.loggedIn;
}

const protect = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Login />;
}

export default protect;