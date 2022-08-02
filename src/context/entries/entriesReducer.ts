import { EntriesState } from '@/context/entries';
import { Entry } from '@/interfaces';

type EntriesAction = { type: '[Entries] Add Entry'; payload: Entry };

const entriesReducer = (
    state: EntriesState,
    action: EntriesAction,
): EntriesState => {
    switch (action.type) {
        case '[Entries] Add Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload],
            };

        default:
            return state;
    }
};

export default entriesReducer;
