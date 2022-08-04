import { createContext } from 'react';

interface ContextProps {
    isSidebarMenuOpen: boolean;
    isNewEntryFormActivated: boolean;
    isDragging: boolean;
    setIsNewEntryFormActivated: (_value: boolean) => void;
    openSidebarMenu: () => void;
    closeSidebarMenu: () => void;
    setIsDragging: (_value: boolean) => void;
}

const UIContext = createContext({} as ContextProps);
export default UIContext;
