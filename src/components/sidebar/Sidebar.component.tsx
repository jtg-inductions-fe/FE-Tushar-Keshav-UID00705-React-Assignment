import { Typography, useMediaQuery, useTheme } from '@mui/material';

import { StyledSidebar } from './Sidebar.styles';

export function Sidebar() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    // TODO implementing menu off on functionality in mobile

    return (
        <StyledSidebar
            open={false}
            variant={isTablet ? 'permanent' : 'temporary'}
            anchor="left"
        >
            <Typography>MyDrammmmmmmmmmmmwer</Typography>
        </StyledSidebar>
    );
}
