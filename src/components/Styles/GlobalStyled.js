import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background: #fff;
    overflow-x:hidden;
}
h1, h2, h3, p, button, input{
    font-family: 'Roboto', sans-serif;
}
a, span, li, label{
    font-family: 'Montserrat', sans-serif;
}
p, a, span{
    font-size:0.8rem;
}
a{
    text-decoration: none;
    color: #fff;
}
ul,li{
    list-style:none;
}
.laptop{
    @media(max-width:1024px){
        display: none;
    }
}
.desktop{
@media(max-width:1100px){
    display: none;
}
}
`;

export default GlobalStyle;
