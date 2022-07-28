import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { MainLayout } from '@/components/layouts';

const Home: NextPage = () => {
    return (
        <MainLayout title="Home">
            <Typography variant="h1" color="primary">
                Hola mundo
            </Typography>
        </MainLayout>
    );
};

export default Home;
