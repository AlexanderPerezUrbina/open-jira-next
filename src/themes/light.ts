import { createTheme } from '@mui/material';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#dee4e7',
        },
        primary: {
            main: '#4a148c',
        },
        secondary: {
            main: '#19874b',
        },
        error: {
            main: '#ff1744',
        },
    },
    components: {},
});

export default lightTheme;
