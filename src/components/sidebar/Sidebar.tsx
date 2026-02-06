import { Toolbar, Typography } from '@mui/material';

import { StyledSidebar } from './Sidebar.styles';

export default function Sidebar() {
    // const theme = useTheme();
    // const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    // TODO implementing menu off on functionality in mobile

    return (
        <StyledSidebar open={false} variant="permanent" anchor="left">
            <Toolbar />
            <Typography>MyDrammmmmmmmmmmmwer</Typography>
        </StyledSidebar>
    );
}
