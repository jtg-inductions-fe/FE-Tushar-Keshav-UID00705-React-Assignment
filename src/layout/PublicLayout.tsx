import { Outlet } from 'react-router-dom';

import { Box, Toolbar } from '@mui/material';

import { ErrorView, FlexBox, Header, Sidebar } from '@components';
import { somethingWentWrong } from '@constant';
import { MainErrorBoundary } from '@error/errorBoundary/MainErrorBoundary';
export default function PublicLayout() {
    return (
        <FlexBox>
            <Header />
            <Sidebar />
            <Box component="main" height="100vh">
                <Toolbar />
                <MainErrorBoundary
                    fallback={<ErrorView {...somethingWentWrong} />}
                >
                    <Outlet />
                </MainErrorBoundary>
            </Box>
        </FlexBox>
    );
}
