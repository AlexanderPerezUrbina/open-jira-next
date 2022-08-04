/* eslint-disable unused-imports/no-unused-vars */
import { createContext } from 'react';
import { Entry, EntryStatus } from '@/interfaces';

interface ContextProps {
    entries: Entry[];
    addNewEntry: (description: string) => void;
    changeEntryStatus: ({
        entry,
        status,
    }: {
        entry: Entry;
        status: EntryStatus;
    }) => void;
}

const EntriesContext = createContext({} as ContextProps);
export default EntriesContext;
