import { ExpandMore } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionDetailsProps,
    AccordionProps,
    AccordionSummary,
    AccordionSummaryProps,
    List,
    ListItem,
    ListItemButton,
    ListItemButtonProps,
    ListItemProps,
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
    '&:hover': {
        backgroundColor: theme.palette.grey[200],
        borderRadius: theme.spacing(3),
    },
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
    paddingLeft: theme.spacing(15),
    width: '100%',
}));

export const StyledList = styled(List)<ListProps>(() => ({
    width: '100%',
}));

export const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
    ({ theme }) => ({
        width: '100%',

        '&:hover': {
            backgroundColor: theme.palette.grey[200],
            borderRadius: theme.spacing(3),
        },
        '&.Mui-selected': {
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    }),
);

export const StyledListItem = styled(ListItem)<ListItemProps>(
    ({ theme, disablePadding }) => ({
        padding: `${disablePadding ? 0 : theme.spacing(2)} 0`,
    }),
);

export const StyledAccordionItem = styled(ListItem)<ListItemProps>(() => ({
    padding: 0,
}));

export const ExpandIcon = styled(ExpandMore)(({ theme }) => ({
    padding: theme.spacing(0.75),
}));
