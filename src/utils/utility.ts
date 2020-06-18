/*************************** 
*     UTILITY FUNCTIONS    *
****************************/
export function disable_scroll(){
    document.body.classList.add('disable-scroll');
}

export function enable_scroll(){
    document.body.classList.remove('disable-scroll');
}

export function random(min:number, max:number):number{
    return Math.floor(Math.random()*(max-min+1)+min);
}