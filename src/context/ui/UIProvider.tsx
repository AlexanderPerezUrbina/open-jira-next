import { UIContext, uiReducer } from '@/context/ui';
import { useReducer } from 'react';

interface ProviderProps {
    children: React.ReactNode;
}

export interface UIState {
    isSidebarMenuOpen: boolean;
    isNewEntryFormActivated: boolean;
}

const initialState: UIState = {
    isSidebarMenuOpen: false,
    isNewEntryFormActivated: false,
};

const UIProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const openSidebarMenu = () => dispatch({ type: '[UI] Open Sidebar' });
    const closeSidebarMenu = () => dispatch({ type: '[UI] Close Sidebar' });
    const setIsNewEntryFormActivated = (value: boolean) => {
        dispatch({ type: '[UI] Open/Close NewEntry Form', payload: value });
    };

    return (
        <UIContext.Provider
            value={{
                ...state,

                // Methods
                openSidebarMenu,
                closeSidebarMenu,
                setIsNewEntryFormActivated,
            }}
        >
            {children}
        </UIContext.Provider>
    );
};

export default UIProvider;
