import {
    Avatar,
    AvatarProps,
    Card,
    CardProps,
    Stack,
    StackProps,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';


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

export const StyledAvatar = styled(Avatar)<AvatarProps>(({theme}) => ({
    width: theme.typography.pxToRem(32),
    height: 'auto',
    filter: `drop-shadow(0 ${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(6)} rgba(0,0,0,0.25))`,
}));

export const StyledCard = styled(Card)<CardProps>(({theme}) => ({
    padding: theme.spacing(4),
}));

