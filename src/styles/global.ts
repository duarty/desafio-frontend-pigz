import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }



    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        font-family: 'Poppins', sans-serif;
        
    }

    body {
        background: ${props => props.theme.colors.white};  
        border-bottom: 5px solid #FF671F;
    }


`