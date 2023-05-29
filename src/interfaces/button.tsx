
export interface IButtonProps{
    title?: string
    padding?: string
    effect?: boolean
    radius?: string
    fontsize?: string
    backgroundcolor?:string
    boxShadow?:string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void) | undefined;
    width?: string
    border?: string
    height?: string
}