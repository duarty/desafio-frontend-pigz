import {ButtonContainer} from './styled'
import React from 'react';
import { IButtonProps } from '../../interfaces/button';

export const Button: React.FC<IButtonProps> = ({
  title, 
  padding, 
  effect, 
  backgroundcolor,
  boxShadow,
  width,
  border,
  height,
  onClick,
  radius, 
  fontsize}: IButtonProps): JSX.Element => {

    return (
      <ButtonContainer 
        padding={padding}
        width={width}
        height={height}
        backgroundcolor={backgroundcolor}
        effect={effect} 
        border={border}
        radius={radius} 
        boxShadow={boxShadow}
        onClick={onClick}
        fontsize={fontsize}>
        
        {title}
      </ButtonContainer>
    );
}

