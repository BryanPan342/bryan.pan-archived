import React from 'react';

import linkedin from  '../assets/linkedin.svg';
import github from  '../assets/github.svg';
import blog from  '../assets/coffee.svg';
import instagram from  '../assets/instagram.svg';
import facebook from  '../assets/facebook.svg';

function Social(){
    return(
        <div className='social'>
            <a href="https://www.linkedin.com/in/blpan/"><img src={linkedin}/></a>
            <a href="https://github.com/BryanPan342"><img src={github}/></a>
            <a href="https://groundsofthecity.com"><img src={blog}/></a>
            <a href="https://www.instagram.com/bryanthesnob/"><img src={instagram}/></a>
            <a href="https://www.facebook.com/bryanpan342"><img src={facebook}/></a>
        </div>
    );
}

export default Social;