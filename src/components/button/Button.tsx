import {ButtonContainer} from './styled'
import React from 'react';
import { IButtonProps } from '../../interfaces/button';

export const Button: React.FC<IButtonProps> = ({
  title, 
  padding, 
  effect, 
  backgroundcolor,
  radius, 
  fontsize}: IButtonProps): JSX.Element => {

    return (
      <ButtonContainer 
        padding={padding}
        backgroundcolor={backgroundcolor}
        effect={effect} 
        radius={radius} 
        fontsize={fontsize}>
        {title}
      </ButtonContainer>
    );
}

