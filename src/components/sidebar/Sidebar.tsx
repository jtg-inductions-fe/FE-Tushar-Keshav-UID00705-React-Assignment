import { Box, Typography, useMediaQuery } from '@mui/material';

import { theme } from '@theme';

import { StyledSidebar } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export function Sidebar({ spacerHeight }: SidebarProps) {
    const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    // TODO implementing menu off on functionality in mobile

    return (
        <StyledSidebar
            open={false}
            variant={isTablet ? 'permanent' : 'temporary'}
            anchor="left"
        >
            <Box height={spacerHeight} />
            <Typography>MyDrammmmmmmmmmmmwer</Typography>
        </StyledSidebar>
    );
}
