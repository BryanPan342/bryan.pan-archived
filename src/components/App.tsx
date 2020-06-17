import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../utils/Hooks';
import {Switch, Route, Link, Redirect } from 'react-router-dom';

import Loader from './Loader';
import Home from './Home';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Resume from './Resume';
import './styles/App.css';

function App() {
    const size = useWindowSize();
    const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'edgy-yellow';
    const body = document.body;

    body.classList.add(theme)
    if (theme){
        body.classList.add(theme)
    }else{
        body.classList.add('edgy-yellow');
        localStorage.setItem('theme', 'edgy-yellow');
    }

    return (
        <div>
            <Loader theme={theme}></Loader>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/work' component={Work}></Route>
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/resume' component={Resume}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        </div>
    );
}

export default App;