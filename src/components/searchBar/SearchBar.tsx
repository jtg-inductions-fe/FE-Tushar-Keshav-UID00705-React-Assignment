import { Search } from '@mui/icons-material';
import { CircularProgress, InputAdornment } from '@mui/material';

import { useSearch } from '@hooks';
import { theme } from '@theme';

import {
    StartInputAdornment,
    StyledSearchBar,
    StyledTextField,
} from './SearchBar.styles';
import { BaseOption, SearchBarProps } from './SearchBar.types';

/* 
    Calls the
    @param {GetUpdatedOptions<T>}: callback - any action user wants to perform on change of input
    @returns AutoCompleteSearchBar JSX
*/
export function SearchBar<T extends BaseOption>({
    getOptions,
    onOptionSelect,
}: SearchBarProps<T>) {
    const [open, isLoading, options, setInput, setOpen] = useSearch(getOptions);

    return (
        <StyledSearchBar<T, false, true, false>
            autoComplete={true}
            autoHighlight={true}
            options={options}
            loading={isLoading}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            noOptionsText={'No results found'}
            filterOptions={(x) => x}
            isOptionEqualToValue={(option: T, value: T) => {
                if (typeof option == 'object' && typeof value == 'object') {
                    return option.id === value.id;
                }
                return option === value;
            }}
            onChange={(_, value, reason) => {
                if (reason == 'blur') {
                    setInput('');
                }
                void onOptionSelect(value);
            }}
            getOptionLabel={(option) => {
                if (typeof option == 'string') {
                    return option;
                } else {
                    return option.name;
                }
            }}
            onInputChange={(_, value) => {
                setInput(value);
            }}
            renderInput={(params) => (
                <StyledTextField
                    {...params}
                    placeholder={'Search'}
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            startAdornment: (
                                <StartInputAdornment position={'start'}>
                                    <Search />
                                </StartInputAdornment>
                            ),
                            endAdornment: isLoading && (
                                <InputAdornment position="end">
                                    <CircularProgress
                                        size={theme.typography.pxToRem(20)}
                                    />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    );
}
