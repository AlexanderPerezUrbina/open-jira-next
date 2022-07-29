import { UIState } from '@/context/ui';

interface UIAction {
    type: UIActionType;
    payload?: any;
}

type UIActionType = '[UI] Open Sidebar' | '[UI] Close Sidebar';

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
