import {
    Autocomplete,
    InputAdornment,
    InputAdornmentProps,
    styled,
    TextField,
} from '@mui/material';

import { theme } from '@theme';

export const StyledSearchBar = styled(Autocomplete)(() => ({
    width: '100%',
    borderRadius: theme.typography.pxToRem(16),
    maxWidth: theme.typography.pxToRem(400),
    boxShadow: theme.shadows[3],

    [theme.breakpoints.down('mobile')]: {
        display: 'none',
    },
})) as typeof Autocomplete;

export const StartInputAdornment = styled(InputAdornment)<InputAdornmentProps>(
    () => ({
        marginRight: theme.spacing(1),
    }),
);

export const StyledTextField = styled(TextField)(() => ({
    padding: 0,

    '& .MuiOutlinedInput-root': {
        padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
        borderRadius: theme.typography.pxToRem(16),

        '& .MuiOutlinedInput-input': {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
}));
