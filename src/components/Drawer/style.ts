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
