import { useEffect, useRef, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { ErrorView, Header, Sidebar } from '@components';
import { SOMETHING_WENT_WRONG } from '@constant';
import { MainErrorBoundary } from '@error';

export default function PublicLayout() {
    const [headerHeight, setheaderHeight] = useState(0);
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (headerRef.current) {
            setheaderHeight(headerRef.current.clientHeight);
        }
    }, []);
    return (
        <Box display={'flex'}>
            <Header headerRef={headerRef} />
            <Sidebar spacerHeight={headerHeight} />
            <Box component="main" height="100vh" flexGrow={1}>
                <Box height={headerHeight} />

                <MainErrorBoundary
                    fallback={<ErrorView {...SOMETHING_WENT_WRONG} />}
                >
                    <Outlet />
                </MainErrorBoundary>
            </Box>
        </Box>
    );
}
