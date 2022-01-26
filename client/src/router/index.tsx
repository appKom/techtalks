import { Routes, Route } from "react-router-dom";
import React, { FC } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Program from "../pages/Program";

const Router: FC = () => {
    return (
    <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
    </Routes>)
}

export default Router;