import { createBrowserRouter, Navigate } from 'react-router';

import { RouterErrorBoundary } from '@error';
import { PublicLayout } from '@layout';
import { Dashboard, PageNotFound } from '@pages';

import { PATHS } from './routes.constants';

export const router = createBrowserRouter([
    {
        path: PATHS.ROOT,
        ErrorBoundary: RouterErrorBoundary,
        Component: PublicLayout,
        children: [
            {
                index: true,
                element: <Navigate to={PATHS.DASHBOARD} replace />,
            },
            {
                path: PATHS.DASHBOARD,
                Component: Dashboard,
            },
            
        ],
    },
    {
        path: PATHS.NOT_FOUND,
        Component: PageNotFound,
    }
]);
