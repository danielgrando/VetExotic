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

export const BoxMain = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;  
    width: 100vw;
`

export const TextSection = styled('h3')`
    padding-top: 4.5em;
    padding-left: 1em;
    margin-bottom: -30px;
    font-weight: 400;
`
