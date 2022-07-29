import { EntriesState } from '@/context/entries';

interface EntriesAction {
    type: EntriesActionType;
    payload?: any;
}

type EntriesActionType = '[Entries] ActionName';

const entriesReducer = (
    state: EntriesState,
    action: EntriesAction,
): EntriesState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default entriesReducer;
