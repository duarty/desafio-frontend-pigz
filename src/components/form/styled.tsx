import styled, {css} from 'styled-components'
import { IContainerProps } from '../../interfaces/Container'
import pigz from './../../styles/themes/orangeLabs'

export const FormContainer = styled.form<IContainerProps>`
    ${(props)=> css`
       display: flex;
       flex-direction: ${props.flexdirection};
       background: ${props.backgroundcolor};
       border-radius: ${props.radius};
       padding: ${props.padding};
       justify-content: ${props.justifycontent};
       position: ${props.position || pigz.configs.positionStatic};
       margin: ${props.margin};
    `}
    


  
`