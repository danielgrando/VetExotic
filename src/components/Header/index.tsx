
import React, { useContext } from 'react'
import { ContainerSwitch, ToolBarCustom, TextHeader } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { AppBar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'

interface Props {
    toggleTheme: () => void
    drawerWidth: number
    handleDrawerToggle: () => void
}

const Header: React.FC<Props> = ({ toggleTheme, drawerWidth, handleDrawerToggle }) => {
    const { colors, title } = useContext(ThemeContext)

    const navigate = useNavigate()

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <ToolBarCustom>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <ContainerSwitch>
                        <TextHeader onClick={() => navigate('/')}>VetExotic</TextHeader>
                        <Switch
                            onChange={toggleTheme}
                            checked={title === 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}
                            offColor={title === 'light' ? shade(0.05, colors.secundary) : shade(0.15, colors.primary)}
                            onColor={colors.secundary}
                        />
                    </ContainerSwitch>
                </ToolBarCustom>
            </AppBar>
        </>
    )
}

export default Header