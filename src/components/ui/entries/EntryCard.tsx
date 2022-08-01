import { Entry } from '@/interfaces';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

const EntryCard = ({ description }: Entry) => {
    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: '10px',
                    }}
                >
                    <Typography variant="body2">hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default EntryCard;
