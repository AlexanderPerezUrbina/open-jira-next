import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start">
                    <MenuOutlinedIcon sx={{ color: '#ffffff' }} />
                </IconButton>
                <Typography variant="h6">OpenJira</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
