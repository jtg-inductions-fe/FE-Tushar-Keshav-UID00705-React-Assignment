import { Drawer, DrawerProps, styled } from '@mui/material';

import { theme } from '@theme';

import { drawerWidth } from './Sidebar.constant';

/* 
    It creates a sidebar with responsive width
*/
export const StyledSidebar = styled(Drawer)<DrawerProps>(({}) => ({
    width: drawerWidth.mobile,
    flexShrink: 0,

    // It adds a breakpoint based width if it is provided.
    ...(drawerWidth.tablet && {
        [theme.breakpoints.up('tablet')]: { width: drawerWidth.tablet },
    }),

    ...(drawerWidth.smallDesktop && {
        [theme.breakpoints.up('smallDesktop')]: {
            width: drawerWidth.smallDesktop,
        },
    }),

    ...(drawerWidth.desktop && {
        [theme.breakpoints.up('desktop')]: { width: drawerWidth.desktop },
    }),

    ...(drawerWidth.largeDesktop && {
        [theme.breakpoints.up('largeDesktop')]: {
            width: drawerWidth.largeDesktop,
        },
    }),

    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: drawerWidth.mobile,

        ...(drawerWidth.tablet && {
            [theme.breakpoints.up('tablet')]: { width: drawerWidth.tablet },
        }),

        ...(drawerWidth.smallDesktop && {
            [theme.breakpoints.up('smallDesktop')]: {
                width: drawerWidth.smallDesktop,
            },
        }),

        ...(drawerWidth.desktop && {
            [theme.breakpoints.up('desktop')]: { width: drawerWidth.desktop },
        }),

        ...(drawerWidth.largeDesktop && {
            [theme.breakpoints.up('largeDesktop')]: {
                width: drawerWidth.largeDesktop,
            },
        }),
    },
}));
