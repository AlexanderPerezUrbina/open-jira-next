import { createContext } from 'react';

interface ContextProps {
    isSidebarMenuOpen: boolean;
    isNewEntryFormActivated: boolean;
    setIsNewEntryFormActivated: (_value: boolean) => void;
    openSidebarMenu: () => void;
    closeSidebarMenu: () => void;
}

const UIContext = createContext({} as ContextProps);
export default UIContext;
