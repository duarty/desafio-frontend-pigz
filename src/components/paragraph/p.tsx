
import { IParagraphProps } from "../../interfaces/paragraph";
import { ParagraphContainer } from "./styled";


export const Paragraph: React.FC<IParagraphProps> = function({
    text, 
    backgroundcolor,
    weight, 
    color, 
    fontSize, 
    textAlign,
    padding}: IParagraphProps): JSX.Element {
  
    return (
        <ParagraphContainer
        backgroundcolor={backgroundcolor}
        color={color} 
        weight={weight}
        fontSize={fontSize} 
        padding={padding}
        textAlign={textAlign}
        >{text}</ParagraphContainer>
    );
}