import { IInputProps } from "../../interfaces/input";
import { InputContainer } from "./styled";


export const Input: React.FC<IInputProps> = function({
    backgroundcolor, 
    text,
    border,
    placeholder, 
    fontcolor,
    width,
    height,
    fontSize, 
    radius,
    padding}: IInputProps): JSX.Element {
    
    return (
        <InputContainer
        backgroundcolor={backgroundcolor} 
        placeholder={placeholder}
        fontcolor={fontcolor}
        width={width}
        height={height}
        fontSize={fontSize} 
        radius={radius}
        border={border}
        padding={padding}
        >{text}</InputContainer>
    );
}