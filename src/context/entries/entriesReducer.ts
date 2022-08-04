import { EntriesState } from '@/context/entries';
import { Entry, EntryStatus } from '@/interfaces';

type EntriesAction =
    | { type: '[Entries] Add Entry'; payload: Entry }
    | {
          type: '[Entries] Change Entry Status';
          payload: { entry: Entry; status: EntryStatus };
      };

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

        case '[Entries] Change Entry Status':
            const filteredEntries = state.entries.filter(
                (entry) => entry._id !== action.payload.entry._id,
            );

            return {
                ...state,
                entries: [
                    ...filteredEntries,
                    {
                        ...action.payload.entry,
                        status: action.payload.status,
                    },
                ],
            };

        default:
            return state;
    }
};

export default entriesReducer;
