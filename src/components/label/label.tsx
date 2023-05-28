import { ILabelProps } from "../../interfaces/label";
import { LabelContainer } from "./styled";


export const Label: React.FC<ILabelProps> = function({
    text, 
    weight, 
    color, 
    fontSize, 
    padding}: ILabelProps): JSX.Element {
  
    return (
        <LabelContainer
        color={color} 
        weight={weight}
        fontSize={fontSize} 
        padding={padding}
        >{text}</LabelContainer>
    );
}