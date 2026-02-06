import {
    Box,
    BoxProps,
    Stack,
    StackProps,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';

import { theme } from '@theme';

export const FlexBox = styled(Box)<BoxProps>(({}) => ({
    display: 'flex',
}));

export const CenteredStack = styled(Stack)<StackProps>(({}) => ({
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledTypography = styled(Typography)<TypographyProps>(() => ({
    ...theme.mixins.lineClamp(3),
    textWrap: 'balance',
    textAlign: 'center',
}));
