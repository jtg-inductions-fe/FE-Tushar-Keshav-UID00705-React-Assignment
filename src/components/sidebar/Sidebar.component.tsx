import { Toolbar, Typography, useMediaQuery } from '@mui/material';

import { theme } from '@theme';

import { StyledSidebar } from './Sidebar.styles';

export function Sidebar() {
    const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    // TODO implementing menu off on functionality in mobile

    return (
        <StyledSidebar
            open={false}
            variant={isTablet ? 'permanent' : 'temporary'}
            anchor="left"
        >
            <Toolbar />
            <Typography>MyDrammmmmmmmmmmmwer</Typography>
        </StyledSidebar>
    );
}
