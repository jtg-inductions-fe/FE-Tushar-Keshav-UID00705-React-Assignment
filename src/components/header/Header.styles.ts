import { CircleNotifications } from '@mui/icons-material';
import {
    AppBar,
    AppBarProps,
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    styled,
    Toolbar,
    ToolbarProps,
} from '@mui/material';

import { DROP_SHADOW, HEADER_HEIGHT } from '@constant';

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.grey[200]}`,
    boxShadow: theme.shadows[3],
    padding: `${theme.typography.pxToRem(12)}`,
    height: HEADER_HEIGHT,
}));

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
    minHeight: 0,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 0,
    },
}));

export const StyledNotificationIcon = styled(CircleNotifications)(() => ({
    filter: DROP_SHADOW,
}));

export const Logo = styled(Box)<BoxProps>(({ theme }) => ({
    filter: DROP_SHADOW,
    display: 'none',

    [theme.breakpoints.up('tablet')]: {
        display: 'block',
    },
})) as typeof Box;

export const MenuButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    [theme.breakpoints.up('tablet')]: {
        display: 'none',
    },
}));
