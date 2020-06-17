export enum Themes{
    edgy_yellow,
    retro_neon,
    simply_made,
}

export interface HeaderProps{
    theme: string,
    theme_select: (t:string) => void,
}