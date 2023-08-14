import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootElement from "./Layout/RootElement";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootElement/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>


        </Route>
    )
)