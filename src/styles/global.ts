import { createGlobalStyle } from 'styled-components'
import "@fontsource/comfortaa";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        font-family: 'Comfortaa', cursive !important;
        background-color: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
    }

    & .MuiListItemText-primary{
        font-family: 'Comfortaa' !important;
    }
`

