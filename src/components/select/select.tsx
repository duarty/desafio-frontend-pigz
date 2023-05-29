
import { ISelectProps } from "../../interfaces/select";
import { SelectContainer } from "./styled";


export const Select = function({
    border,
    children,
    flexDirection,
    padding, 
    radius,
    backgroundcolor,
    width,
    height}: ISelectProps): JSX.Element {
  
    return (
        <SelectContainer
         border={border}
         radius={radius}
         backgroundcolor={backgroundcolor}
         flexDirection={flexDirection}
         padding={padding}
         width={width}
         height={height}
        >{children}</SelectContainer>
    );
}