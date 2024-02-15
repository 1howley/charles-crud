import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Add from "./pages/add.js"

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/add" element={ <Add/> }></Route>
            </Routes>
        </BrowserRouter>
    );
};
