import React from 'react';
import Social from './Social';
import {NavProps} from '../utils/props';

function Nav(props: NavProps){
    const theme_select = props.theme_select;
    // TODO - ANIMATION OF ELEMENTS
    // TODO - SWITCH TO TRANSLATION RATHER THAN WIDTH
    // TODO - ADD THEME ICONS
    // TODO - ADD HIGHLIGHT FOR CURRENT PATH (window.location.pathname)
    // TODO - ADD HOVER TO ROUTES
    return(
        <div className='nav'>
            <div className='nav-content'>
                <div className='routes'>
                    <a id='home' href='/'> <h1>HOME</h1> </a>
                    <a id='about' href='/about'> <h1>ABOUT</h1> </a>
                    <a id='work' href='/work'> <h1>WORK</h1> </a>
                    <a id='projects' href='/projects'> <h1>PROJECTS</h1> </a>
                    <a id='resume' href='/resume'> <h1>RESUME</h1> </a>
                </div>

                <div className='themes'>
                    <div className='theme-container' onClick = {()=>{theme_select('edgy-yellow')}}> 
                        <h2>Edgy-Yellow</h2>
                        <h4>everyone's a little edgy</h4>
                    </div>
                    <div className='theme-container' onClick = {()=>{theme_select('retro-neon')}}> 
                        <h2>Retro-Neon</h2>
                        <h4>cooler than you think</h4>
                    </div>
                    <div className='theme-container' onClick = {()=>{theme_select('simply-made')}}> 
                        <h2>Simply-Made</h2> 
                        <h4>sounds like yogurt slogan</h4>
                    </div>
                    <div className='theme-container' onClick = {()=>{console.log('devloper mode')}}>
                        <h2>Dev-Friendly</h2>
                        <h4>when design gets tiring</h4>
                    </div>
                </div>
                <Social/>
            </div>
        </div>
    )
}

export default Nav;