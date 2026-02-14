import { Box, BoxProps, styled } from '@mui/material';

export const MainContent = styled(Box)<BoxProps>(() => ({
    overflowY: 'auto',
    overflowX: 'hidden',
}));
