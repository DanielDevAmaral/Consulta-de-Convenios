import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Convenios from "./pages/Convenios"
import UnimedSergipe from "./pages/Plano/usergipe"
import UnimedNacional from "./pages/Plano/unacional"
import Life from "./pages/Plano/life"
import Amil from "./pages/Plano/amil.jsx"

function MainRoutes() {

    return(
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Convenios />} path="/Convenios" />
            <Route element={<UnimedSergipe />} path="/UnimedSergipe" />
            <Route element={<UnimedNacional />} path="/UnimedNacional" />
            <Route element={<Life />} path="/Life" />
            <Route element={<Amil />} path="/Amil" />
        </Routes>
    )
    
}

export default MainRoutes;