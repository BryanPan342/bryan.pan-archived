import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../utils/Hooks';
import {Switch, Route, Link, Redirect } from 'react-router-dom';

import Loader from './Loader';
import Home from './Home';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Resume from './Resume';
import Header from './Header';
import './styles/App.scss';




function App() {
    const size = useWindowSize();
    const body = document.body;
    const [theme, setTheme] = useState('edgy-yellow');
    const theme_select = (theme:string) => {setTheme(theme); location.reload();}

    useEffect(()=>{
        const stored_theme:string = localStorage.getItem('theme');
        if (stored_theme != theme){
            console.log(stored_theme)
            setTheme(stored_theme);
        }
        body.classList.add(theme)
    },[]);

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <div>
            <Loader theme={theme}></Loader>
            <Header theme={theme} theme_select={theme_select}></Header>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/work' component={Work}></Route>
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/resume' component={Resume}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
            <div className='fixed footer' id='scroll'> scroll </div>
            <div className='fixed footer' id='top'> top </div>
        </div>
    );
}

export default App;