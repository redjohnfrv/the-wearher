import { createGlobalStyle } from 'styled-components';
import { typography } from '../typography';

export const GlobalStyle = createGlobalStyle`  
    html, body {
        height: 100%;

        & > div {
            height: 100%;
        }
    }

    body {    
        margin: 0;    
        padding: 0;    
        ${() => typography.normal};  
    }  
    
    * {    
        box-sizing: border-box;    
        font-family: "Roboto", sans-serif;  
    }  
    
    a {    
        text-decoration: none;    
    }  
    
    img {    
        max-width: 100%;    
        height: auto;  
    }  
    
    ul {    
        padding: 0;    
        margin: 0;    
        list-style: none;  
    }  
    
    li {    
        list-style: none;  
    }  
    
    p, h1, h2, h3, h4 {    
        padding: 0;    
        margin: 0;  
    }  
    
    span {    
        display: inline-block;  
    }`;
