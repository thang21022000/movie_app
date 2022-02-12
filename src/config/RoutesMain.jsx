import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Home from '../components/pages/Home'
import Detail from '../components/pages/Detail'
import Catalog from '../components/pages/Catalog'


function RoutesMain() {
    return (
        <Router>
            <Routes>
                <Route 
                    path='/:category/search/:keyword' 
                    component = {Catalog}
                />
                <Route 
                    path='/:category/:id' 
                    component = {Detail}
                />
                <Route 
                    path='/:category' 
                    component = {Catalog}
                />
                <Route 
                    path='/'
                    exact 
                    component = {Home}
                />
            </Routes>
        </Router>
    )
}

export default RoutesMain
