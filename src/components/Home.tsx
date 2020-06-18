import React, { useState, useEffect } from 'react';
import {hide_hello, show_hello} from '../utils/animation';

function Home() {
    const [offset, setOffset] = useState(0);
    const [animating, setAnimating] = useState(false);

    const handleScroll = () => {
        const showingHello = document.body.classList.contains('showHello');
        const about = document.getElementById("about");
        const bounding = about.getBoundingClientRect();
        if(showingHello){
            hide_hello();
        }
        if(bounding.top == 0 && !showingHello){
            show_hello();
        }
        setOffset(bounding.top);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main id='home'>
            <div className='wrapper'>
                <div id='hello-block'></div>
                <div className='body fullscreen' id='about'>
                    <h1> About </h1>
                </div>
            </div>
            <div className='body halfscreen' id='personal'>
                <h1> Personal Stuff </h1>
            </div>
            <div className='body fullscreen'>
                <h1> Work </h1>
            </div>
            <div className='body halfscreen' id='skills'>
                <h1> Skills </h1>
            </div>
            <div className='body fullscreen'>
                <h1> Projects </h1>
            </div>
        </main>
    );
}

export default Home;