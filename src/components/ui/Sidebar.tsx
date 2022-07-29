import Link from 'next/link';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

interface MenuItem {
    href: string;
    text: string;
    icon?: React.ReactNode;
}

const Sidebar = () => {
    const menuItems: MenuItem[] = [
        {
            href: '/',
            text: 'Home',
            icon: <HomeOutlinedIcon />,
        },
        {
            href: '/contact',
            text: 'Contact Us',
            icon: <PhoneOutlinedIcon />,
        },
    ];

    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => {
                console.log('Ignacia tienes cara de ignacia');
            }}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {menuItems.map(({ href, text, icon }, index) => (
                        <Link
                            href={href}
                            passHref
                            key={`sidebar-list-item-${index}`}
                        >
                            <a
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                <ListItem button>
                                    {icon && (
                                        <ListItemIcon>{icon}</ListItemIcon>
                                    )}
                                    <ListItemText primary={text} />
                                </ListItem>
                            </a>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
