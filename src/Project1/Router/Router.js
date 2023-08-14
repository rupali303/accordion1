import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";
import CategoryPage from "./Pages/CategoryPage";


export const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="products/:id" element={<ProductDescription/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="products/category/:type" element={<CategoryPage/>}/>
        </Route>
    )
)