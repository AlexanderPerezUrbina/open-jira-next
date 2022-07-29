import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '@/context/ui';
import { useContext } from 'react';

const Navbar = () => {
    const { openSidebarMenu } = useContext(UIContext);

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start" onClick={openSidebarMenu}>
                    <MenuOutlinedIcon sx={{ color: '#ffffff' }} />
                </IconButton>
                <Typography variant="h6">OpenJira</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
