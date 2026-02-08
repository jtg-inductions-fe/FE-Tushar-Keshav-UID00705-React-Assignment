import {
    Avatar,
    AvatarProps,
    Box,
    BoxProps,
    Card,
    CardProps,
    Stack,
    StackProps,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';

import { theme } from '@theme';


export const CenteredStack = styled(Stack)<StackProps>(({}) => ({
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledTypography = styled(Typography)<TypographyProps>(
    ({ theme }) => ({
        ...theme.mixins.lineClamp(3),
        textWrap: 'balance',
        textAlign: 'center',
    }),
);
