import {
    styled,
    TableHead,
    TableHeadProps,
    TableRow,
    TableRowProps,
} from '@mui/material';

export const StyledTableHead = styled(TableHead)<TableHeadProps>(
    ({ theme }) => ({
        backgroundColor: theme.palette.grey[50],
        '& .MuiTableRow-head': {
            '& .MuiTableCell-head': {
                fontSize: theme.typography.overline.fontSize,
                fontWeight: theme.typography.overline.fontWeight,
                lineHeight: theme.typography.overline.lineHeight,
                color: theme.palette.grey[500],
            },
        },
    }),
);

export const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
    '&.MuiTableRow-root:nth-of-type(even)': {
        backgroundColor: theme.palette.grey[50],
    },

    '& .MuiTableCell-root': {
        borderBottom: 'none',
    },
}));
