import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

/*************************** 
*     UTILITY FUNCTIONS    *
****************************/
export function disable_scroll(element: string){
    disableBodyScroll(document.getElementById(element))
}

export function enable_scroll(){
    clearAllBodyScrollLocks();
}

export function random(min:number, max:number):number{
    return Math.floor(Math.random()*(max-min+1)+min);
}