import anime from 'animejs';

export interface LoaderProps {
    theme: string
}

const ball_offsets:number[][] = [[0, 165], [330, 165], 
                                [165, 330], [165, 0], 
                                [48.33, 281.67], [281.67, 48.33], 
                                [48.33, 48.33], [281.67, 281.67],
                                [12.56, 228.14], [317.44, 101.86],
                                [101.86, 317.44], [228.14, 12.56],
                                [228.14, 317.44], [101.86, 12.56],
                                [317.44, 228.14], [12.56, 101.86]]

export function shoot_balls(n:number){
    let tgt:string = '.balls_' + n.toString();
    let tp:string = ball_offsets[n-1][0].toString() + 'px';
    let lft:string = ball_offsets[n-1][1].toString() + 'px';
    anime({
        targets: tgt,
        top: tp,
        left: lft,
        easing: 'easeOutQuad',
        duration: 1000,
    });
}

export function expand_center(iter:number){
    console.log(iter)
    let tgt:string = '.sun-center';
    let s:string = (30 + iter*30) + 'px';
    console.log(s)
    anime({
        targets: tgt,
        width: s,
        height: s,
        easing: 'easeOutQuad',
        duration: 1000,
    });
}