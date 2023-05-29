import styled, {css} from 'styled-components'
import { IButtonProps } from '../../interfaces/button'

export const ButtonContainer = styled.button<IButtonProps>`

    ${(props)=> css`
        border-radius: ${props.radius};
        font-size: ${props.fontsize};
        padding: ${props.padding};
        background: ${props.backgroundcolor};
        width: ${props.width};
        transition: filter 0.3s ease; 
        &:hover {
            filter: drop-shadow(${props.boxShadow});
        }
        border: ${props.border};
        height: ${props.height};
    `}

    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    align-items: center;
    font-weight: 500;
    letter-spacing: 21;
    cursor: pointer;
 
`
