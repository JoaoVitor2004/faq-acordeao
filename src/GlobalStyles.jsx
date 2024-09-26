import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family:  'Work sans',Verdana, Geneva, Tahoma, sans-serif;
        height: 100vh;
        background-color: ${({theme}) => theme.colors.lightPink};
    }

    p {
        font-size: 11px;
    }
`;