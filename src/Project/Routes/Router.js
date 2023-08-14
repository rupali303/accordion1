import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import DashBoard from "../Pages/DashBoard";
import RootLayout from "./Layout/RootLayout";
import MuiForm from "../Components/MuiForm";
export const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<DashBoard/>}/>
            <Route path="Login" element={<MuiForm/>}/>
        </Route>
    )
)