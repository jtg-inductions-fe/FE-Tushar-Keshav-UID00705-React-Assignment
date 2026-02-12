import {
    Accordion,
    AccordionDetails,
    AccordionDetailsProps,
    AccordionProps,
    AccordionSummary,
    AccordionSummaryProps,
    List,
    ListItemButton,
    ListItemButtonProps,
    ListProps,
    styled,
} from '@mui/material';

export const StyledAccordion = styled(Accordion)<AccordionProps>(() => ({
    width: '100%',
}));

export const StyledAccordionSummary = styled(
    AccordionSummary,
)<AccordionSummaryProps>(({ theme }) => ({
    padding: 0,
    minHeight: 0,
    boxShadow: 'none',
    '&.Mui-expanded': {
        minHeight: 0,
        backgroundColor: theme.palette.grey[200],
        borderRadius: theme.spacing(3),
    },

    '& .MuiAccordionSummary-content': {
        margin: 0,
        '&.Mui-expanded': {
            margin: 0,
        },
    },
}));

export const StyledAccordionDetails = styled(
    AccordionDetails,
)<AccordionDetailsProps>(({ theme }) => ({
    padding: 0,
    marginLeft: theme.spacing(15),
    width: '100%',
}));

export const StyledList = styled(List)<ListProps>(() => ({
    width: '100%',
}));

export const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
    () => ({
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }),
);
