import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InfoIcon from '@mui/icons-material/InfoRounded';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components'
import Header from '../Header';
import { DrawerDesktop, DrawerMobile, ListItemTextDrawer, ListItemButton } from './style';
import { ListItemIcon } from '@mui/material';

const drawerWidth = 240;
interface Props {
    toggleTheme: () => void
    window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
    const { title } = useContext(ThemeContext)
    const { window, toggleTheme } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['FeedBack', 'Sobre'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton href={text === "Sobre" ? "https://github.com/danielgrando" : "https://google.com"} target="_blank">
                            <ListItemIcon style={{ color: title === 'light' ? 'black' : 'white' }}>
                                {index % 2 === 0 ? <MailIcon /> : <InfoIcon />}
                            </ListItemIcon>
                            <ListItemTextDrawer primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box style={{
                display: 'flex',
            }}>
                <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} toggleTheme={toggleTheme} />
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <DrawerMobile
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </DrawerMobile>
                    <DrawerDesktop
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </DrawerDesktop>
                </Box>
            </Box >
        </>
    );
}