import { DragEvent, useContext, useMemo, useRef, useState } from 'react';
import { List, Paper } from '@mui/material';
import { EntryCard } from '@/components/ui';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';
import * as api from '@/api';

interface Props {
    status: EntryStatus;
}

const EntryList = ({ status }: Props) => {
    const { isDragging, setIsDragging } = useContext(UIContext);
    const { entries, updateEntry } = useContext(EntriesContext);
    const listRef = useRef<HTMLDivElement>(null);

    const [isListHighlighted, setIsListHighlighted] = useState<boolean>(false);

    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries, status],
    );

    const onDrop = async (event: DragEvent<HTMLDivElement>) => {
        setIsListHighlighted(false);
        const id = event.dataTransfer.getData('entry_id');

        const res = await api.entries.put(`/${id}`, {
            status,
        });

        if (res.status !== 200) return;

        updateEntry(id, { status });
        setIsDragging(false);
    };

    const onDragEnter = () => {
        setIsListHighlighted(true);
    };

    const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
        if (event.target !== listRef.current) return;
        setIsListHighlighted(false);
    };

    return (
        <div
            onDrop={onDrop}
            onDragOver={(event) => event.preventDefault()}
            style={{
                backgroundColor:
                    isListHighlighted && isDragging
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'inherit',
                transition: 'background-color ease .3s',
            }}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
        >
            <Paper
                sx={{
                    height: 'calc(100vh - 180px)',
                    overflowY: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '1px 5px',
                }}
                ref={listRef}
            >
                <List
                    sx={{
                        opacity: isDragging ? 0.4 : 1,
                        transition: 'opacity ease .3s',
                    }}
                >
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
