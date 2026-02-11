import {
    Accordion,
    AccordionDetails,
    AccordionDetailsProps,
    AccordionProps,
    AccordionSummary,
    AccordionSummaryProps,
    List,
    ListProps,
    styled,
} from '@mui/material';

export const StyledAccordion = styled(Accordion)<AccordionProps>(() => ({
    width: '100%',
}));

export const StyledAccordionSummary = styled(
    AccordionSummary,
)<AccordionSummaryProps>(() => ({
    padding: 0,
    minHeight: 0,

    '&.Mui-expanded': {
        minHeight: 0,
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
)<AccordionDetailsProps>(() => ({
    padding: 0,
    width: '100%',
}));

export const StyledList = styled(List)<ListProps>(() => ({
    width: '100%',
}));
