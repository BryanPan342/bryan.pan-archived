import React, { useState, useEffect } from 'react';
function Home() {
    return (
        <div id='home'>
            <div id='hello-block'></div>
            <div className='body fullscreen' id='about'>
                <h1> About </h1>
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
        </div>
    );
}

export default Home;