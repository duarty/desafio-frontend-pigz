import styled, {css} from 'styled-components'
import { IContainerProps } from '../../interfaces/Container'

export const DivContainer = styled.div<IContainerProps>`
    ${(props)=> css`
       display: flex;
       flex-direction: ${props.flexdirection};
       background: ${props.backgroundcolor};
       border-radius: ${props.radius};
       padding: ${props.padding};
       justify-content: ${props.justifycontent};
       position: ${props.position};
       margin: ${props.margin};
       align-items: ${props.alignItems};
       align-content: ${props.alignContent};
       border: ${props.border};
       border-top: ${props.borderTop};
       border-bottom: ${props.borderBottom}; 
       top: ${props.top};
       left: ${props.left};
       bottom: ${props.bottom};
       right: ${props.right};
       overflow: ${props.overflow};
       z-index: ${props.zIndex};
       backdrop-filter: ${props.backDropFilter};
       width: ${props.width};
       height: ${props.height};
    `}

`