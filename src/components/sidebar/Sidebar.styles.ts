import { Box, BoxProps, Drawer, DrawerProps, styled } from '@mui/material';

import { DRAWER_WIDTH } from './Sidebar.constant';

/**
 * It creates a sidebar with responsive width
 */
export const StyledSidebar = styled(Drawer)<DrawerProps>(({ theme }) => ({
    width: DRAWER_WIDTH.mobile,

    // It adds a breakpoint based width if it is provided.
    ...(DRAWER_WIDTH.tablet && {
        [theme.breakpoints.up('tablet')]: { width: DRAWER_WIDTH.tablet },
    }),

    ...(DRAWER_WIDTH.smallDesktop && {
        [theme.breakpoints.up('smallDesktop')]: {
            width: DRAWER_WIDTH.smallDesktop,
        },
    }),

    ...(DRAWER_WIDTH.desktop && {
        [theme.breakpoints.up('desktop')]: { width: DRAWER_WIDTH.desktop },
    }),

    ...(DRAWER_WIDTH.largeDesktop && {
        [theme.breakpoints.up('largeDesktop')]: {
            width: DRAWER_WIDTH.largeDesktop,
        },
    }),

    '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH.mobile,

        ...(DRAWER_WIDTH.tablet && {
            [theme.breakpoints.up('tablet')]: {
                width: DRAWER_WIDTH.tablet,
            },
        }),

        ...(DRAWER_WIDTH.smallDesktop && {
            [theme.breakpoints.up('smallDesktop')]: {
                width: DRAWER_WIDTH.smallDesktop,
            },
        }),

        ...(DRAWER_WIDTH.desktop && {
            [theme.breakpoints.up('desktop')]: { width: DRAWER_WIDTH.desktop },
        }),

        ...(DRAWER_WIDTH.largeDesktop && {
            [theme.breakpoints.up('largeDesktop')]: {
                width: DRAWER_WIDTH.largeDesktop,
            },
        }),
    },
}));

export const ScrollableBox = styled(Box)<BoxProps>(() => ({
    overflowY: 'auto',
    overflowX: 'clip',
    scrollbarGutter: 'stable',
}));
