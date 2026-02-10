import { Outlet, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { ErrorView, Header, Sidebar } from '@components';
import { SOMETHING_WENT_WRONG } from '@constant';
import { MainErrorBoundary } from '@error';

export function PublicLayout() {
    const navigate = useNavigate();
    const onClick = () => {
        void navigate('/');
    };
    return (
    <MainErrorBoundary fallback={
                <ErrorView
                    error={{ ...SOMETHING_WENT_WRONG }}
                    onClick={onClick}
                />
            }
        >
        <Box display="flex" height="100vh" flexDirection="column">
            <MainErrorBoundary>
                <Header />
            </MainErrorBoundary>
            <Box display="flex" flexGrow={1}>
                <MainErrorBoundary>
                    <Sidebar />
                </MainErrorBoundary>
                <Box component="main" flexGrow={1}>
                        <Outlet />
                </Box>
            </Box>
        </Box>
    </MainErrorBoundary>
    );
}
