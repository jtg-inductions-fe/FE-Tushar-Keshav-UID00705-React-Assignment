import {
    styled,
    tableCellClasses,
    TableHead,
    TableHeadProps,
    TableRow,
    tableRowClasses,
    TableRowProps,
} from '@mui/material';

export const StyledTableHead = styled(TableHead)<TableHeadProps>(
    ({ theme }) => ({
        backgroundColor: theme.palette.grey[50],
        [`& .${tableRowClasses.head}`]: {
            [`& .${tableCellClasses.head}`]: {
                fontSize: theme.typography.overline.fontSize,
                fontWeight: theme.typography.overline.fontWeight,
                lineHeight: theme.typography.overline.lineHeight,
                color: theme.palette.grey[500],
            },
        },
    }),
);

export const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
    [`&.${tableRowClasses.root}:nth-of-type(even)`]: {
        backgroundColor: theme.palette.grey[50],
    },

    [`& .${tableCellClasses.root}`]: {
        borderBottom: 'none',
    },
}));
