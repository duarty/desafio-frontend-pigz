
import { ITitleProps } from "../../interfaces/title";
import { TitleContainer } from "./styled";


export const Title: React.FC<ITitleProps> = function({
    text, 
    backgroundcolor,
    weight, 
    color, 
    fontSize,
    margin,
    textAlign, 
    radius,
    zIndex,
    position,
    padding}: ITitleProps): JSX.Element {
  
    return (
        <TitleContainer
        backgroundcolor={backgroundcolor}
        color={color} 
        weight={weight}
        fontSize={fontSize}
        textAlign={textAlign} 
        padding={padding}
        margin={margin}
        zIndex={zIndex}
        radius={radius}
        position={position}
        >{text}</TitleContainer>
    );
}