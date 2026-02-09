import { Outlet } from 'react-router-dom';

import { Box, Toolbar } from '@mui/material';

import { ErrorView, Header, Sidebar } from '@components';
import { SOMETHING_WENT_WRONG } from '@constant';
import { MainErrorBoundary } from '@error';

export function PublicLayout() {
    return (
        <Box display='flex'>
            <Header />
            <Sidebar />
            <Box component="main" height="100vh" flexGrow={1}>
                <Toolbar />
                <MainErrorBoundary
                    fallback={<ErrorView {...SOMETHING_WENT_WRONG} />}
                >
                    <Outlet />
                </MainErrorBoundary>
            </Box>
        </Box>
    );
}
