import styled, { css } from 'styled-components'

import { ILabelProps } from '../../interfaces/label'


export const LabelContainer = styled.label<ILabelProps>`
     ${(props)=> css`
        font-size: ${props.fontSize};
        color: ${props.color};
        padding: ${props.padding};
        font-weight: ${props.weight};
    `}
    

`
