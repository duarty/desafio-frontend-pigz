import styled, { css } from 'styled-components'
import { IInputProps } from '../../interfaces/input'
import pigz from './../../styles/themes/orangeLabs'


export const InputContainer = styled.input<IInputProps>`
     ${(props)=> css`
        background-color: ${props.backgroundcolor};
        font-size: ${props.fontSize};
        color: ${props.fontcolor};
        font-size: ${props.fontSize};
        padding: ${props.padding || 0};
        border: ${props.border};
        border-radius: ${props.radius};
        width: ${props.width};
        height: ${props.height}

    `}  
    outline: none;


    &::placeholder {
        color: ${pigz.fonts.fontInputPlaceholder};   
    }

    
   
`
