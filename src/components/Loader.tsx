import React from 'react';
import {LoaderProps, shoot_balls, expand_center} from '../utils/LoaderUtils';
import {random} from '../utils/common';

function Loader(props: LoaderProps){
    const theme = props.theme;

    if (theme == 'edgy-yellow'){
        console.log('yellow')
    }

    var iter:number, t_offset:number = 0;
    for (iter = 0; iter < 8; iter++){
        let t0:number = iter;
        let t1:number = iter*2 + 1;
        let t2:number = iter*2 + 2;
        setTimeout(() =>{
            shoot_balls(t1);
            shoot_balls(t2);

            expand_center(t0);
        }, 1000 + t_offset);

        t_offset += random(100,700);
    }

    setTimeout(()=>{

    }, 1000 + t_offset + 1000);

    return (
        <div className='loader-wrapper'>
            {props.theme == 'edgy-yellow' ? 
                <div className='loader fullscreen'>
                    <div className="sun">
                        <span className='balls_1'/>
                        <span className='balls_2'/>
                        <span className='balls_3'/>
                        <span className='balls_4'/>
                        <span className='balls_5'/>
                        <span className='balls_6'/>
                        <span className='balls_7'/>
                        <span className='balls_8'/>
                        <span className='balls_9'/>
                        <span className='balls_10'/>
                        <span className='balls_11'/>
                        <span className='balls_12'/>
                        <span className='balls_13'/>
                        <span className='balls_14'/>
                        <span className='balls_15'/>
                        <span className='balls_16'/>
                    </div>
                    <div className='sun-center'/>
                </div>
            :
                <div>
                    Unfortunate
                </div>
            }
        </div>
    );
}

export default Loader;