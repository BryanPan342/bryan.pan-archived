import React from 'react';
import {NavProps} from '../utils/props';

function Nav(props: NavProps){
    const theme_select = props.theme_select;
    return(
        <div className='nav'>
            <div className='nav-content'>
                <button onClick = {()=>{theme_select('edgy-yellow')}}> Yellow </button>
                <button onClick = {()=>{theme_select('retro-neon')}}> Neon </button>
            </div>
        </div>
    )
}

export default Nav;