import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import JobSearch from "./JobSearch";

export default function AllRoutes() {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<JobSearch />} path='/jobs' />
            <Route element={<Home />} path='/home' />
        </Routes>
    )
}
