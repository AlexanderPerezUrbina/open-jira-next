import { createContext } from 'react';
import { Entry } from '@/interfaces';

interface ContextProps {
    entries: Entry[];
}

const EntriesContext = createContext({} as ContextProps);
export default EntriesContext;
