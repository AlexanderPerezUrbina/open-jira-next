import { useReducer } from 'react';
import { EntriesContext, entriesReducer } from '@/context/entries';
import { Entry, EntryStatus } from '@/interfaces';

import { v4 as uuidv4 } from 'uuid';

interface ProviderProps {
    children: React.ReactNode;
}

export interface EntriesState {
    entries: Entry[];
}

const initialState: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            createdAt: Date.now(),
            description: 'Pendiente: aishdishd',
            status: 'pending',
        },
        {
            _id: uuidv4(),
            createdAt: Date.now() - 86400000,
            description: 'En Progreso: aishdishd',
            status: 'in-progress',
        },
        {
            _id: uuidv4(),
            createdAt: Date.now() - 172800000,
            description: 'Completado: aishdishd',
            status: 'finished',
        },
    ],
};

const EntriesProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(entriesReducer, initialState);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            createdAt: Date.now(),
            description,
            status: 'pending',
        };

        dispatch({ type: '[Entries] Add Entry', payload: newEntry });
    };

    const changeEntryStatus = ({
        entry,
        status,
    }: {
        entry: Entry;
        status: EntryStatus;
    }) => {
        dispatch({
            type: '[Entries] Change Entry Status',
            payload: { entry, status },
        });
    };

    return (
        <EntriesContext.Provider
            value={{ ...state, addNewEntry, changeEntryStatus }}
        >
            {children}
        </EntriesContext.Provider>
    );
};

export default EntriesProvider;
