import { createTheme } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#222222',
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
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#4a148c',
                },
            },
        },
    },
});

export default darkTheme;
