import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import themes from '../data/themes.json';

/*************************** 
*     UTILITY FUNCTIONS    *
****************************/
export function disable_scroll(element: string):void{
    const root = document.getElementById('root');
    root.classList.add('disable-scroll');
    disableBodyScroll(document.getElementById(element));
}

export function enable_scroll():void{
    const root = document.getElementById('root');
    root.classList.remove('disable-scroll');
    clearAllBodyScrollLocks();
}

export function random(min:number, max:number):number{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function isValidTheme(theme: string):boolean{
    console.log(themes.hasOwnProperty(theme));
    return themes.hasOwnProperty(theme);
}