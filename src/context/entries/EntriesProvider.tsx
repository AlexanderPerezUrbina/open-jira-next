import { useReducer } from 'react';
import { EntriesContext, entriesReducer } from '@/context/entries';
import { Entry } from '@/interfaces';

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
            description: 'aishdishd',
            status: 'pending',
        },
        {
            _id: uuidv4(),
            createdAt: Date.now() - 86400000,
            description: 'aishdishd',
            status: 'in-progress',
        },
        {
            _id: uuidv4(),
            createdAt: Date.now() - 172800000,
            description: 'aishdishd',
            status: 'finished',
        },
    ],
};

const EntriesProvider = ({ children }: ProviderProps) => {
    const [state] = useReducer(entriesReducer, initialState);

    return (
        <EntriesContext.Provider value={{ ...state }}>
            {children}
        </EntriesContext.Provider>
    );
};

export default EntriesProvider;
