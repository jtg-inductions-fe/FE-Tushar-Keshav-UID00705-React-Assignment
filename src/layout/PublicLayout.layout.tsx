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
        <Box display="flex" height="100vh" flexDirection="column">
            <Header />
            <Box display="flex" flexGrow={1}>
                <Sidebar />
                <Box component="main" flexGrow={1}>
                    <MainErrorBoundary
                        fallback={
                            <ErrorView
                                error={{ ...SOMETHING_WENT_WRONG }}
                                onClick={onClick}
                            />
                        }
                    >
                        <Outlet />
                    </MainErrorBoundary>
                </Box>
            </Box>
        </Box>
    );
}
