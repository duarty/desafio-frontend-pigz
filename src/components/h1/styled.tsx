import styled, { css } from 'styled-components'
import { ITitleProps } from '../../interfaces/title'

export const TitleContainer = styled.h1<ITitleProps>`
     ${(props)=> css`
        
        background-color: ${props.backgroundcolor};
        font-size: ${props.fontSize};
        color: ${props.color};
        padding: ${props.padding || 0};
        font-weight: ${props.weight};
        text-align: ${props.textAlign};
        margin: ${props.margin};
        border-radius: ${props.radius};
        position: ${props.position};
        z-index: ${props.zIndex}
    `}
    
    
`
