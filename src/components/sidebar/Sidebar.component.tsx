import { SidebarMenu } from 'components/sidebarMenu';
import { useNavigate } from 'react-router-dom';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { CustomIconButton } from '@components';
import { HEADER_HEIGHT } from '@constant';

import { SIDEBAR_MENU_ITEM_DETAILS } from './Sidebar.constant';
import { ScrollableBox, StyledSidebar } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export function Sidebar({ isMenuOpen }: SidebarProps) {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    const navigate = useNavigate();

    const onMenuItemClick = (path: string) => {
        void navigate(path);
    };
    return (
        <StyledSidebar
            open={isMenuOpen}
            variant={isTablet ? 'permanent' : 'temporary'}
            anchor="left"
        >
            <Box minHeight={HEADER_HEIGHT} />
            <ScrollableBox>
                <SidebarMenu
                    groups={SIDEBAR_MENU_ITEM_DETAILS}
                    onMenuItemClick={onMenuItemClick}
                />
            </ScrollableBox>
            <Box height={theme.spacing(6)} flexGrow={1} />
            <Box
                width="100%"
                display="flex"
                justifyContent="center"
                gap={theme.spacing(6)}
            >
                <CustomIconButton
                    icon="tune"
                    ariaLabel="tune"
                    onClick={() => void navigate('/tune')}
                />
                <CustomIconButton
                    icon="public"
                    ariaLabel="public"
                    onClick={() => void navigate('/data')}
                />
                <CustomIconButton
                    icon="settings"
                    ariaLabel="settings"
                    onClick={() => void navigate('/settings')}
                />
            </Box>
            <Box height={theme.spacing(6)} />
        </StyledSidebar>
    );
}
