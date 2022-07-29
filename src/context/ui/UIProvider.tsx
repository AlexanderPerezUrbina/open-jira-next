import { UIContext, uiReducer } from '@/context/ui';
import { useReducer } from 'react';

interface ProviderProps {
    children: React.ReactNode;
}

export interface UIState {
    isSidebarMenuOpen: boolean;
}

const initialState: UIState = {
    isSidebarMenuOpen: false,
};

const UIProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const openSidebarMenu = () => dispatch({ type: '[UI] Open Sidebar' });
    const closeSidebarMenu = () => dispatch({ type: '[UI] Close Sidebar' });

    return (
        <UIContext.Provider
            value={{ ...state, openSidebarMenu, closeSidebarMenu }}
        >
            {children}
        </UIContext.Provider>
    );
};

export default UIProvider;
