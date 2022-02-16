import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Catalog from '../pages/Catalog'


function RoutesMain() {
    return (
        <Router>
            <Routes>
                <Route 
                    path='/:category/search/:keyword' 
                    element = {<Catalog/>}
                />
                <Route 
                    path='/:category/:id' 
                    element = {<Detail/>}
                />
                <Route 
                    path='/:category' 
                    element = {<Catalog/>}
                />
                <Route 
                    path='/'
                    exact 
                    element = {<Home/>}
                />
            </Routes>
        </Router>
    )
}

export default RoutesMain
