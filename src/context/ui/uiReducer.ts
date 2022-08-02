import { UIState } from '@/context/ui';

type UIAction =
    | { type: '[UI] Open Sidebar' }
    | { type: '[UI] Close Sidebar' }
    | { type: '[UI] Open/Close NewEntry Form'; payload: boolean };

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

        case '[UI] Open/Close NewEntry Form':
            return {
                ...state,
                isNewEntryFormActivated: action.payload,
            };

        default:
            return state;
    }
};

export default uiReducer;
