import React from 'react'

import { Route, Swtich } from 'react-router-dom'

import Home from '../components/pages/Home'
import Detail from '../components/pages/Detail'
import Catalog from '../components/pages/Catalog'


function Routes() {
    return (
        <Swtich>
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
        </Swtich>
    )
}

export default Routes
