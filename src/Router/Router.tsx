import React from 'react';
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Home from '../components/Home';
import Sobre from '../components/Sobre/Sobre';




function AppRouter(){
    return(

        <Routes>
            <Route path='/' element={<Home/>}/>
            
        </Routes>
    )
}
export default AppRouter;