import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>

            <Typography variant="h1">Hola mundo</Typography>
        </div>
    );
};

export default Home;
