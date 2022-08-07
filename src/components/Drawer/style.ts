import { Drawer, ListItemText } from '@mui/material'
import styled from 'styled-components'

export const DrawerDesktop = styled(Drawer)`
    & .MuiDrawer-paper{
        background: rgba(${props => props.theme.colors.tertiary});
    }
`
export const DrawerMobile = styled(Drawer)`
    & .MuiDrawer-paper{
        background: rgba(${props => props.theme.colors.tertiary});
    }
`

export const ListItemTextDrawer = styled(ListItemText)`
    color: ${props => props.theme.colors.text};
`

export const ListItemIconDrawer = styled(ListItemText)`
    color: ${props => props.theme.colors.text};
`

export const ListItemButton = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: rgba(133, 240, 255, 0.3);
    }
`

export const TCCAbout = styled.div`
    padding: 1rem;
`

export const TCCText = styled.p`
    font-size: 0.9em;
    padding: 0.5rem;
    color: ${props => props.theme.colors.text} !important;
`


