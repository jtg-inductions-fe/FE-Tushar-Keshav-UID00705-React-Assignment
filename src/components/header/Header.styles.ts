import { AppBar, AppBarProps, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.grey[200]}`,
    boxShadow: `0px ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(4)} 0px ${theme.palette.grey[100]};`,
    padding: `${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(12)}`,
}));
