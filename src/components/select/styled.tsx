import styled, { css } from 'styled-components'
import { ISelectProps } from '../../interfaces/select'


export const SelectContainer = styled.div<ISelectProps>`
     ${(props)=> css`
        padding: ${props.padding};
        background: ${props.backgroundcolor};
        border: ${props.border};
        width: ${props.width};
        height: ${props.height};
        display: flex;
        flex-direction: ${props.flexDirection};
        border-radius: ${props.radius}
    `}
    
`
