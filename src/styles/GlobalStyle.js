import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --monochrome: #0B0C10;
        --bg-color: #1F2833;
        --font-color: #fffff2;
        --primary-color: #66FCF1;
        --secondary-color: #45A29E;
        --lightgrey: #C5C6C7;
        --contrast: #FF8360;
    }
    [data-theme="light"] {
        --monochrome: #fffff2;
        --bg-color: #fffff2;
        --font-color: #0B0C10;
        --primary-color: #f39c12;
        --secondary-color: #e67e22;
        --contrast: #0066ff;
    }
    html {
        scroll-behavior: smooth;
        font-family: Arial, Helvetica, sans-serif;
    }
    body {
        margin: 0;
        background: var(--bg-color);
        color: var(--font-color);
    }
`

export default GlobalStyle
