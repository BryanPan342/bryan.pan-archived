import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => {
  return (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/work' component={Work}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Redirect to='/'/>
    </Switch>
  );
}

export default Main;