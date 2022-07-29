import type { NextPage } from 'next';
import { MainLayout } from '@/components/layouts';
import { Card, CardHeader, Grid } from '@mui/material';

const Home: NextPage = () => {
    return (
        <MainLayout title="Home | OpenJira">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Pendientes" />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="En progreso" />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Completados" />
                    </Card>
                </Grid>
            </Grid>
        </MainLayout>
    );
};

export default Home;
