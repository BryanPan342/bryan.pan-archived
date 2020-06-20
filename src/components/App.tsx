/*****************************
 *       DEPENDENCIES        *
 *****************************/
import React, { useState, useEffect } from 'react';

import {Switch, Route, Redirect } from 'react-router-dom';

/*****************************
 *   UNIVSERAL COMPONENTS    *
 *****************************/
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

import {animate_nav} from '../utils/animation';
import {isValidTheme} from '../utils/utility';
import { useWindowSize } from '../utils/hooks';
import './styles/App.scss';

/*****************************
 *      PAGE COMPONENTS      *
 *****************************/
import Home from './Home';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Resume from './Resume';

function App() {
    const body = document.body;
    /* STATE VARIABLES */
    const [theme, setTheme] = useState('edgy-yellow');
    const theme_select = (theme:string) => {
        setTheme(theme); 
        location.reload();
    }
    const [isNav, toggleNav] = useState(false);
    const toggle_nav = () => {
        animate_nav(isNav);
        toggleNav(!isNav);
    }

    /* HOOK FOR COMPONENT MOUNT */
    useEffect(()=>{
        const stored_theme:string = localStorage.getItem('theme');
        if (isValidTheme(stored_theme) && stored_theme != theme){
            setTheme(stored_theme);
        }
        body.classList.add(theme)
    },[]);

    /* HOOK FOR CHANGING THEME */
    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <div id='site-wrapper'>
            <Loader theme={theme}></Loader>
            <Header toggle_nav={toggle_nav}></Header>
            <Nav theme_select={theme_select}></Nav>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/work' component={Work}></Route>
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/resume' component={Resume}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
            <Footer></Footer>
        </div>
    );
}

export default App;