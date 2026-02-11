import { SidebarMenu } from 'components/sidebarMenu';
import { HEADER_HEIGHT } from 'constant/stylesConstnats';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { SIDEBAR_MENU_ITEM_DETAILS } from './Sidebar.constant';
import { StyledSidebar } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export function Sidebar({ isMenuOpen }: SidebarProps) {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));

    return (
        <StyledSidebar
            open={isMenuOpen}
            variant={isTablet ? 'permanent' : 'temporary'}
            anchor="left"
        >
            <Box height={HEADER_HEIGHT} />
            <Box overflow="auto">
                <SidebarMenu groups={SIDEBAR_MENU_ITEM_DETAILS} />
            </Box>
        </StyledSidebar>
    );
}
