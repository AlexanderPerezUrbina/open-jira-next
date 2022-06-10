import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
