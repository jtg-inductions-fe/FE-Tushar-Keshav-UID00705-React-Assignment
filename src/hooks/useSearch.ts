import { useEffect, useState } from 'react';

import {
    BaseOption,
    GetUpdatedOptions,
} from 'components/searchBar/SearchBar.types';
import { useDebounce } from 'use-debounce';

import { SearchHookState } from './types';

/* 
    A custom hook which tracks the search states
    and provide callback to manipulate them
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
            active = false;
        };
    }, [debounceValue, getOptions]);

    return [open, isLoading, options, setInput, setOpen];
}
