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
    const body = document.body;
    const [theme, setTheme] = useState('edgy-yellow');
    const theme_select = (theme:string) => {setTheme(theme)}

    useEffect(()=>{
        const stored_theme:string = localStorage.getItem('theme');
        if (stored_theme){
            console.log(stored_theme)
            setTheme(stored_theme);
        }
        body.classList.add(theme)
    },[]);

    useEffect(()=>{
        console.log(localStorage.getItem('theme'));
        localStorage.setItem('theme', theme);
        console.log(localStorage.getItem('theme'));
    }, [theme])

    return (
        <div>
            <button className="expose" onClick = {()=>{theme_select(theme == 'edgy-yellow' ? 'retro-neon' : 'edgy-yellow')}}> Switch Theme </button>
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