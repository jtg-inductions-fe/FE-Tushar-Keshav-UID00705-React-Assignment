import { Drawer, Typography, useMediaQuery, useTheme } from '@mui/material';

const drawerWidth = {
    mobile: '100%',
    tablet: '25%',
    smallDesktop: '33%',
    largeDesktop: '15%',
} as const;

export default function Sidebar() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    // TODO implementing menu off on functionality in mobile

    return (
        <Drawer
            open={false}
            variant={isTablet ? 'permanent' : 'temporary'}
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Typography>MyDrawer</Typography>
        </Drawer>
    );
}
