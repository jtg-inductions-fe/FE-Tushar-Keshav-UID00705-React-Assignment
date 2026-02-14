import {
    Box,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Typography,
    useTheme,
} from '@mui/material';

import { DATE_OPTIONS } from './TransactionTable.config';
import { StyledTableHead, StyledTableRow } from './TransactionTable.styles';
import {
    STATUS_COLOR_MAP,
    Transaction,
    TransactionTableProps,
} from './TransactionTable.types';

export function TransactionTable<T>({
    transactions,
    transform,
}: TransactionTableProps<T>) {
    const theme = useTheme();
    return (
        <Box>
            <TableContainer>
                <Table width="100%">
                    <StyledTableHead>
                        <StyledTableRow>
                            <TableCell>TRANSACTION</TableCell>
                            <TableCell>DATE & TIME</TableCell>
                            <TableCell>AMOUNT</TableCell>
                            <TableCell>STATUS</TableCell>
                        </StyledTableRow>
                    </StyledTableHead>
                    <TableBody>
                        {transactions.map((transaction) => {
                            const transactionData: Transaction =
                                transform(transaction);
                            const date =
                                transactionData.date.toLocaleDateString(
                                    'en-US',
                                    DATE_OPTIONS,
                                );
                            return (
                                <StyledTableRow key={transactionData.id}>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            noWrap
                                            component="span"
                                        >
                                            {transactionData.details}{' '}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="span"
                                            color={theme.palette.grey[900]}
                                            fontWeight="medium"
                                            noWrap
                                        >
                                            {transactionData.partyName}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            color={theme.palette.grey[500]}
                                            noWrap
                                        >
                                            {date}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="subtitle2"
                                            color={theme.palette.grey[900]}
                                            noWrap
                                        >
                                            {transactionData.amount < 0 && '-'}
                                            {'$'}
                                            {Math.abs(transactionData.amount)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            variant="filled"
                                            label={transactionData.status}
                                            color={
                                                STATUS_COLOR_MAP[
                                                    transactionData.status
                                                ]
                                            }
                                            size="small"
                                        />
                                    </TableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
