import { AppBar, AppBarProps, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));
