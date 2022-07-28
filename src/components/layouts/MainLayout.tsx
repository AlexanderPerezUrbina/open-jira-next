import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar } from '@/components/ui';

interface Props {
    title: string;
    children: React.ReactNode;
}

const MainLayout = ({ title, children }: Props) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />
            <Box sx={{ padding: '10px 20px' }}>{children}</Box>
        </Box>
    );
};

export default MainLayout;
