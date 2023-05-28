
import React from 'react';
import { FormContainer } from './styled';
import { IContainerProps } from '../../interfaces/Container';

export const Form: React.FC<IContainerProps> = ({
  backgroundcolor, 
  position,
  margin,
  gradient,
  flexdirection, 
  radius, 
  padding, 
  justifycontent, 
  children}: IContainerProps): JSX.Element => {
 
    return (
      <FormContainer 
        backgroundcolor={backgroundcolor}
        position={position}
        gradient={gradient}
        flexdirection={flexdirection}
        radius={radius}
        padding={padding}
        justifycontent={justifycontent}
        margin={margin}
        >
        {children}
      </FormContainer>
    );
}
