import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from "./pages/BasketPage";
import React from "react";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/cart' element={<BasketPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;
