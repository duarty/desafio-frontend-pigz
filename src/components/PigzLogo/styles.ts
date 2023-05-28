import styled, { css } from 'styled-components'
import { IIcon } from '../../interfaces/logo'

export const IconContainer = styled.img<IIcon>`
     ${(props)=> css`
        position: ${props.position};
        top: ${props.top};
        right: ${props.right};
        left: ${props.left};
        transform: translate(${props.transform},${props.transform});
        padding: ${props.padding};
        align-self: ${props.alignSelf};
        overflow: ${props.overflow};
        z-index: ${props.zIndex}
    `}
    
`
