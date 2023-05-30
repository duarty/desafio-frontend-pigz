import styled, { css } from 'styled-components'
import { IParagraphProps } from '../../interfaces/paragraph'


export const ParagraphContainer = styled.p<IParagraphProps>`
     ${(props)=> css`
        background-color: ${props.backgroundcolor};
        font-size: ${props.fontSize};
        color: ${props.color};
        padding: ${props.padding};
        font-weight: ${props.weight};
        display: flex;
        align-items: ${props.alignItems};
        justify-content:${props.justifyContent};
        text-align: ${props.textAlign};
        position: ${props.justifyContent};
    `}
   
   
`
