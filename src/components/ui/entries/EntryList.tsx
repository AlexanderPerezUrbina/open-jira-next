import { List, Paper } from '@mui/material';
import { EntryCard } from '@/components/ui';

const EntryList = () => {
    return (
        <div>
            <Paper
                sx={{
                    height: 'calc(100vh - 180px)',
                    overflowY: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '1px 5px',
                }}
            >
                <List sx={{ opacity: 1 }}>
                    {[...Array(5)].map((_, index) => (
                        <EntryCard key={`entry-list-item-${index}`} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default EntryList;
