import { createContext } from 'react';

interface ContextProps {
    isSidebarMenuOpen: boolean;
    openSidebarMenu: () => void;
    closeSidebarMenu: () => void;
}

const UIContext = createContext({} as ContextProps);
export default UIContext;
