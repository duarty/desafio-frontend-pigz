import { IIcon } from "../../interfaces/logo";
import { IconContainer } from "./styles";


export const Icon = function({
    src, 
    position, 
    padding, 
    top, 
    width,
    height,
    alignSelf,
    left, 
    right,
    bottom,
    transform, 
    overflow,
    zIndex}: IIcon): JSX.Element {
  
    return (
        <IconContainer
            src={src}
            position={position} 
            top={top} 
            width={width}
            height={height}
            right={right}
            overflow={overflow}
            alignSelf={alignSelf}
            left={left} 
            bottom={bottom}
            padding={padding}
            transform={transform} 
            zIndex={zIndex} 
        ></IconContainer>
    );
}