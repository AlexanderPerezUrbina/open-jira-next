/* eslint-disable unused-imports/no-unused-vars */
import { createContext } from 'react';
import { Entry } from '@/interfaces';

interface ContextProps {
    entries: Entry[];
    addNewEntry: (description: string) => void;
    updateEntry: (id: string, values: Partial<Entry>) => void;
}

const EntriesContext = createContext({} as ContextProps);
export default EntriesContext;
