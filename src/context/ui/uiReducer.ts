import { UIState } from '@/context/ui';

type UIAction = { type: '[UI] Open Sidebar' } | { type: '[UI] Close Sidebar' };

const uiReducer = (state: UIState, action: UIAction): UIState => {
    switch (action.type) {
        case '[UI] Open Sidebar':
            return {
                ...state,
                isSidebarMenuOpen: true,
            };

        case '[UI] Close Sidebar':
            return {
                ...state,
                isSidebarMenuOpen: false,
            };

        default:
            return state;
    }
};

export default uiReducer;
