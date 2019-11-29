import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';


import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
            <Route path='/menu-items' exact render={() => <MainPage/>}/>
                <Route path='/menu-items/:id' />;
                }}/>
                <Route path='/cart'render={() => <CartPage/>} />
                <Redirect from='/' to='/menu-items'/>
            </Switch>
        </div>
    )
}

export default App;