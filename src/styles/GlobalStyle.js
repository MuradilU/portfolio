import { createGlobalStyle } from "styled-components"
import TransitionStyles from "./TransitionStyles"
import Font from "./font"

const GlobalStyle = createGlobalStyle`
    ${Font}

    :root {
        --monochrome: #0B0C10;
        --bg-color: #1F2833;
        --font-color: #fffff2;
        --primary-color: #66FCF1;
        --secondary-color: #45A29E;
        --lightgrey: #C5C6C7;
        --contrast: #FF8360;
        --hover-color: #27323f;
        --card-color: #364659;

        --box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);

        --linear-gradient: linear-gradient(135deg, #43c6ac, #191654); 
        
        --nav-height: 100px;
        --nav-scroll-height: 80px;

        --tab-height: 100px;

        --font-family: 'Montserrat', sans-serif;
    }
    [data-theme="light"] {
        --monochrome: #fffff2;
        --bg-color: #fffff2;
        --font-color: #0B0C10;
        --primary-color: #f39c12;
        --secondary-color: #e67e22;
        --contrast: #0066ff;
        --hover-color: #e6e6e6;
        --card-color: #FFFFFF;
        
        --box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.7);

        --linear-gradient: linear-gradient(135deg, #f46b45, #eea849);
    }
    html {
        scroll-behavior: smooth;
        font-family: var(--font-family);
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background: var(--bg-color);
        color: var(--font-color);
        font-family: var(--font-family);
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    p,
    em, {
        color: var(--font-color);
    }
    section {
        padding: 100px 0;
        margin: 0 auto;
    }
    .section-header {
        text-align: center;

        &:after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 5%;
        padding: 8px 0 0;
        border-bottom: 2px solid var(--primary-color);
        }
    }

    @media screen and (max-width: 750px) {
        section {
            padding: 50px 0;
        }
    }

    ${TransitionStyles};
`

export default GlobalStyle
