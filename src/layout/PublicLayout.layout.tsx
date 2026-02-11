import { useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { ErrorView, Header, Sidebar } from '@components';
import { SOMETHING_WENT_WRONG } from '@constant';
import { MainErrorBoundary } from '@error';

export function PublicLayout() {
    const [isMenuOpen, setMenuState] = useState(false);

    const navigate = useNavigate();
    const onClick = () => {
        void navigate('/');
    };

    return (
        <MainErrorBoundary
            fallback={
                <ErrorView
                    error={{ ...SOMETHING_WENT_WRONG }}
                    onClick={onClick}
                />
            }
        >
            <Box display="flex" height="100vh" flexDirection="column">
                <MainErrorBoundary>
                    <Header onMenuClick={() => setMenuState(!isMenuOpen)} />
                </MainErrorBoundary>
                <Box display="flex" flexGrow={1}>
                    <MainErrorBoundary>
                        <Sidebar isMenuOpen={isMenuOpen} />
                    </MainErrorBoundary>
                    <Box component="main" flexGrow={1}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </MainErrorBoundary>
    );
}
