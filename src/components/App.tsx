import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../utils/Hooks';
import {Switch, Route, Link, Redirect } from 'react-router-dom';

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
            <Route path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/work' component={Work}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/resume' component={Resume}></Route>
        </Switch>
        </div>
    );
}

export default App;