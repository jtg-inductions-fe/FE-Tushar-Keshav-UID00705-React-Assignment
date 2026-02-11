import { DROP_SHADOW } from 'constant/stylesConstnats';

import { CircleNotifications, Notes } from '@mui/icons-material';
import {
    AppBar,
    AppBarProps,
    Box,
    BoxProps,
    styled,
    Toolbar,
    ToolbarProps,
} from '@mui/material';

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.grey[200]}`,
    boxShadow: theme.shadows[3],
    padding: `${theme.typography.pxToRem(12)}`,
}));

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
    minHeight: 0,
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

export const MenuIcon = styled(Notes)(({ theme }) => ({
    [theme.breakpoints.up('tablet')]: {
        display: 'none',
    },
}));
