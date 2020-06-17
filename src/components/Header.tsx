import React from 'react';
import {Themes, HeaderProps} from '../utils/AppUtils'

function Header(props: HeaderProps){
    const theme_select = props.theme_select;
    const theme = props.theme;
    return (
        <div>
            <button className="fixed header" onClick = {()=>{theme_select(theme == 'edgy-yellow' ? 'retro-neon' : 'edgy-yellow')}}> Nav </button>
        </div>
    );
}
export default Header;