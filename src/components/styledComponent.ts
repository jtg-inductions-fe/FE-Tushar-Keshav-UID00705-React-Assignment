import {
    Stack,
    StackProps,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';


export const CenteredStack = styled(Stack)<StackProps>(() => ({
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledTypography = styled(Typography)<TypographyProps>(({theme}) => ({
    ...theme.mixins.lineClamp(3),
    textWrap: 'balance',
    textAlign: 'center',
}));
