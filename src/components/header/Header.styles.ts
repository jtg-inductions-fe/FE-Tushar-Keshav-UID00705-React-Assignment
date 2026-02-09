import { CircleNotifications } from '@mui/icons-material';
import {
    AppBar,
    AppBarProps,
    Box,
    BoxProps,
    styled,
    Toolbar,
    ToolbarProps,
} from '@mui/material';

import { theme } from '@theme';

export const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.grey[200]}`,
    boxShadow: `0px ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(4)} 0px ${theme.palette.grey[100]};`,
    padding: `${theme.typography.pxToRem(12)}`,
}));

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
    minHeight: 0,
}));

export const StyledNotificationIcon = styled(CircleNotifications)(() => ({
    filter: `drop-shadow(0 ${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(6)} rgba(0,0,0,0.25))`,
}));

export const Logo = styled(Box)<BoxProps>(() => ({
    filter: `drop-shadow(0 ${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(6)} rgba(0,0,0,0.25))`,
})) as typeof Box;
