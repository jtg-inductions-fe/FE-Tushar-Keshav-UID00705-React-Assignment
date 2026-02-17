import { useEffect, useState } from 'react';

import {
    BaseOption,
    GetUpdatedOptions,
} from 'components/searchBar/SearchBar.types';
import { useDebounce } from 'use-debounce';

import { SearchHookState } from './useSearch.types';

/**
 * A custom hook to manage the state and logic for a search suggestion system.
 *
 * @param {GetUpdatedOptions<T>} getOptions - An async function that fetches
 * options whenever the search input changes.
 *
 * @returns {SearchHookState<T>} A tuple containing:
 * - `isOpen`: Whether the suggestion dropdown should be visible.
 * - `isLoading`: True while the `getOptions` promise is pending.
 * - `options`: The current list of results fetched from `getOptions`.
 * - `setInput`: Function to update the search query string.
 * - `setOpen`: Function to manually toggle the dropdown state.
 */
export function useSearch<T extends BaseOption>(
    getOptions: GetUpdatedOptions<T>,
): SearchHookState<T> {
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [options, setOptions] = useState<T[]>([]);
    const [input, setInput] = useState('');
    const [debounceValue] = useDebounce(input, 500);

    useEffect(() => {
        // Early return for empty spaces
        if (!debounceValue) {
            setOptions([]);

            return;
        }

        // To prevent race condition, it updates the state only if it's true
        let active = true;
        setLoading(true);

        const getData = async () => {
            try {
                const newOptions = await getOptions(debounceValue);
                if (active) {
                    setOptions(newOptions);
                }
            } catch {
                setOptions([]);
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };
        void getData();

        // cleanup function
        return () => {
            setLoading(false);
            active = false;
        };
    }, [debounceValue]);

    return [open, isLoading, options, setInput, setOpen];
}
