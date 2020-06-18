import React from 'react';
import {NavProps} from '../utils/props';

function Nav(props: NavProps){
    const theme_select = props.theme_select;
    return(
        <div className='fullscreen nav' style={{transform: 'translateX(100%)'}}>
           <button onClick = {()=>{theme_select('edgy-yellow')}}> Yellow </button>
           <button onClick = {()=>{theme_select('retro-neon')}}> Neon </button>
        </div>
    )
}

export default Nav;