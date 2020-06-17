import React from 'react';
import {LoaderProps} from '../utils/LoaderUtils';

function Loader(props: LoaderProps){
    const theme = props.theme;

    if (theme == 'edgy-yellow'){
        console.log('yellow')
    }

    return (
        <div className='loader fullscreen'>
            <div className="sun">
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
            <div className='sun-center'/>
        </div>
    );
}

export default Loader;