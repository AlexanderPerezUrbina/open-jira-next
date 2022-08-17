import { EntriesState } from '@/context/entries';
import { Entry } from '@/interfaces';

type EntriesAction =
    | { type: '[Entries] Set Initial State'; payload: Entry[] }
    | { type: '[Entries] Add Entry'; payload: Entry }
    | {
          type: '[Entries] Update Entry';
          payload: Partial<Entry> & { _id: string };
      };

const entriesReducer = (
    state: EntriesState,
    action: EntriesAction,
): EntriesState => {
    switch (action.type) {
        case '[Entries] Set Initial State':
            return {
                ...state,
                entries: action.payload,
            };

        case '[Entries] Add Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload],
            };

        case '[Entries] Update Entry':
            const { _id, ...values } = action.payload;

            const entry = state.entries.find((entry) => entry._id === _id)!;

            const entriesWithoutUpdatedEntry = state.entries.filter(
                (entry) => entry._id !== _id,
            );

            return {
                ...state,
                entries: [
                    ...entriesWithoutUpdatedEntry,
                    {
                        ...entry,
                        ...values,
                    },
                ],
            };

        default:
            return state;
    }
};

export default entriesReducer;
