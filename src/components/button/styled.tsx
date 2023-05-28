import styled, {css} from 'styled-components'
import { IButtonProps } from '../../interfaces/button'

export const ButtonContainer = styled.button<IButtonProps>`

    ${(props)=> css`
        border-radius: ${props.radius};
        font-size: ${props.fontsize};
        padding: ${props.padding};
        background: ${props.backgroundcolor};
    `}

   // background: linear-gradient(to right, ${props => props.theme.colors.orangePigz2}, ${props => props.theme.colors.orangePigz1});
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    align-items: center;
    font-weight: 500;
    letter-spacing: 21;
    box-shadow: none; 
    transition: filter 0.3s ease; 

    &:hover{
        cursor: pointer;
        //box-shadow: 0px 2px 6px 0px ${props => props.theme.colors.orangePigz2}; 
        filter: drop-shadow(0px 0px 8px ${props => props.theme.colors.orangePigz2});
    }
`
