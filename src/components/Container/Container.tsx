
import React from 'react';
import { DivContainer } from './styled';
import { IContainerProps } from '../../interfaces/Container';

export const Container: React.FC<IContainerProps> = ({
  backgroundcolor, 
  position,
  gradient,
  flexdirection, 
  radius, 
  padding, 
  top,
  right,
  left,
  bottom,
  alignItems,
  borderTop,
  borderBottom,
  alignContent,
  justifycontent, 
  overflow,
  children}: IContainerProps): JSX.Element => {
 
    return (
      <DivContainer 
        backgroundcolor={backgroundcolor}
        borderTop={borderTop}
        borderBottom={borderBottom}
        position={position}
        gradient={gradient}
        flexdirection={flexdirection}
        radius={radius}
        padding={padding}
        alignContent={alignContent}
        alignItems={alignItems}
        justifycontent={justifycontent}
        top={top}
        overflow={overflow}
        bottom={bottom}
        left={left}
        right={right}
        >
        {children}
      </DivContainer>
    );
}
