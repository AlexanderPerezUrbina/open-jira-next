import { useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from '@/context/entries';
import { Entry } from '@/interfaces';

import * as api from '@/api';

import { v4 as uuidv4 } from 'uuid';

interface ProviderProps {
    children: React.ReactNode;
}

export interface EntriesState {
    entries: Entry[];
}

const initialState: EntriesState = {
    entries: [],
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

    const updateEntry = (_id: string, values: Partial<Omit<Entry, '_id'>>) => {
        dispatch({
            type: '[Entries] Update Entry',
            payload: { _id, ...values },
        });
    };

    const refreshEntries = async () => {
        const { data } = await api.entries.get<Entry[]>('/');
        dispatch({
            type: '[Entries] Set Initial State',
            payload: data,
        });
    };

    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
            {children}
        </EntriesContext.Provider>
    );
};

export default EntriesProvider;
