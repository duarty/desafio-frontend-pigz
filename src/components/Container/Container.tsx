
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
  width,
  height,
  justifycontent, 
  overflow,
  backDropFilter,
  zIndex,
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
        width={width}
        height={height}
        backDropFilter={backDropFilter}
        zIndex={zIndex}
        overflow={overflow}
        bottom={bottom}
        left={left}
        right={right}
        >
        {children}
      </DivContainer>
    );
}
