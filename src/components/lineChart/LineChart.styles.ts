import { Box, BoxProps, Card, CardProps, styled } from '@mui/material';

export const TooltipCard = styled(Card)<CardProps>(({ theme }) => ({
    boxShadow: theme.shadows[2],
    borderRadius: theme.typography.pxToRem(12),
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
}));

export const Dot = styled(Box)<BoxProps>(({ theme }) => ({
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    width: theme.typography.pxToRem(10),
    height: theme.typography.pxToRem(10),
}));
