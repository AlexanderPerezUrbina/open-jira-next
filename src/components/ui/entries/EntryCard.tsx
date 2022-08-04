import { DragEvent, useContext } from 'react';
import { Entry } from '@/interfaces';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { UIContext } from '@/context/ui';

const EntryCard = ({ description, _id }: Entry) => {
    const { setIsDragging } = useContext(UIContext);

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        setIsDragging(true);
        event.dataTransfer.setData('entry_id', _id);
    };

    const onDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <Card
            sx={{
                marginBottom: 1,
            }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
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
