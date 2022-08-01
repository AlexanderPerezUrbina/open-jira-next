import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntryCard } from '@/components/ui';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';

interface Props {
    status: EntryStatus;
}

const EntryList = ({ status }: Props) => {
    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries, status],
    );

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
                    {entriesByStatus.map((entry) => (
                        <EntryCard
                            {...entry}
                            key={`entry-list-item-${entry._id}`}
                        />
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default EntryList;
