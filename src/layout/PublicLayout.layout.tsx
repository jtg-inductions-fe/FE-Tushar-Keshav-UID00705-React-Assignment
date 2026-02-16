import { useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { Box, useTheme } from '@mui/material';

import { ErrorView, Header, Sidebar } from '@components';
import { HEADER_HEIGHT, SOMETHING_WENT_WRONG } from '@constant';
import { MainErrorBoundary } from '@error';

import { MainContent } from './PublicLayout.styles';

export function PublicLayout() {
    const [isMenuOpen, setMenuState] = useState(false);
    const theme = useTheme();
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
            <Box height="100vh" display="flex">
                <MainErrorBoundary>
                    <Header onMenuClick={() => setMenuState((prev) => !prev)} />
                </MainErrorBoundary>
                <MainErrorBoundary>
                    <Sidebar isMenuOpen={isMenuOpen} />
                </MainErrorBoundary>
                <MainContent
                    component="main"
                    flexGrow={1}
                    bgcolor={theme.palette.grey[50]}
                >
                    <Box minHeight={HEADER_HEIGHT} />
                    <Box>
                        <Outlet />
                    </Box>
                </MainContent>
            </Box>
        </MainErrorBoundary>
    );
}
