import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';


import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems())
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
            <Route path='/menu-items' exact />
                <Route path='/menu-items/:id' />;
                }}/>
                <Route path='/cart'/>
                <Redirect from='/' to='/menu-items'/>
            </Switch>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default WithRestoService()(App);