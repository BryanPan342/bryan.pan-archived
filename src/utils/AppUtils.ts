import anime from 'animejs';
import { NoEmitOnErrorsPlugin } from 'webpack';

export enum Themes{
    edgy_yellow,
    retro_neon,
    simply_made,
}

export interface HeaderProps{
    toggle_nav: () => void,
}

export interface NavProps{
    theme_select: (t:string) => void,
}

/*************************** 
*     UTILITY FUNCTIONS    *
****************************/
export function disable_scroll(){
    document.body.classList.add('disable-scroll');
}

export function enable_scroll(){
    document.body.classList.remove('disable-scroll');
}


/*************************** 
*      NAV ANIMATIONS      *
****************************/

export function animate_nav(isNav: boolean){
    const tgt = '.nav';
    if(isNav){
        anime({
            targets: tgt,
            translateX: '100%',
            duration: 500,
            easing: 'easeOutQuad'
        });
        enable_scroll();
    }else{
        anime({
            targets: tgt,
            translateX: '0%',
            duration: 500,
            easing: 'easeOutQuad'
        });
        disable_scroll();
    }

}