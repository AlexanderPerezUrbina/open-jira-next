import { createContext } from 'react';
import { Entry } from '@/interfaces';

interface ContextProps {
    entries: Entry[];
    addNewEntry: (_description: string) => void;
}

const EntriesContext = createContext({} as ContextProps);
export default EntriesContext;
