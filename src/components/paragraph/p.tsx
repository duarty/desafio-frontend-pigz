
import { IParagraphProps } from "../../interfaces/paragraph";
import { ParagraphContainer } from "./styled";


export const Paragraph: React.FC<IParagraphProps> = function({
    text, 
    backgroundcolor,
    weight, 
    justifyContent,
    color, 
    fontSize, 
    textAlign,
    position,
    padding}: IParagraphProps): JSX.Element {
  
    return (
        <ParagraphContainer
        backgroundcolor={backgroundcolor}
        color={color} 
        position={position}
        justifyContent={justifyContent}
        weight={weight}
        fontSize={fontSize} 
        padding={padding}
        textAlign={textAlign}
        >{text}</ParagraphContainer>
    );
}