import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../utils/Hooks';
import { Link } from "react-router-dom";

import {Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Resume from './Resume';
import './styles/App.css';

function App() {
    const size = useWindowSize();
    const theme = localStorage.getItem('theme');
    const body = document.body;

    body.classList.add(theme ? theme : 'edgy-yellow')
    if (theme){
        body.classList.add(theme)
    }else{
        body.classList.add('edgy-yellow');
        localStorage.setItem('theme', 'edgy-yellow');
    }

    return (
        <div>
        <Link to="/about"> about </Link>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/work' component={Work}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/resume' component={Resume}></Route>
        </Switch>
        </div>
    );
}

export default App;