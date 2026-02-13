import { SidebarMenu } from 'components/sidebarMenu';
import { useNavigate } from 'react-router-dom';

import { Public, Settings, Tune } from '@mui/icons-material';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';

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
            <Box height={HEADER_HEIGHT} />
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
                <IconButton>
                    <Tune
                        color="secondary"
                        onClick={() => void navigate('/customizations')}
                    />
                </IconButton>
                <IconButton>
                    <Public
                        color="secondary"
                        onClick={() => void navigate('/data')}
                    />
                </IconButton>
                <IconButton>
                    <Settings
                        color="secondary"
                        onClick={() => void navigate('/settings')}
                    />
                </IconButton>
            </Box>
            <Box height={theme.spacing(6)} />
        </StyledSidebar>
    );
}
