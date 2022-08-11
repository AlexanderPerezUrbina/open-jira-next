import { useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from '@/context/entries';
import { Entry, EntryStatus } from '@/interfaces';

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
        <EntriesContext.Provider
            value={{ ...state, addNewEntry, changeEntryStatus }}
        >
            {children}
        </EntriesContext.Provider>
    );
};

export default EntriesProvider;
