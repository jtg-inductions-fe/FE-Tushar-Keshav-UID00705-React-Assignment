import { createBrowserRouter, Navigate } from 'react-router';

import RouterErrorBoundary from '@error/RouterErrorBoundary';
import { PublicLayout } from '@layout';
import { Dashboard } from '@pages/overview';
import PageNotFound from '@pages/pageNotFound';

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
            {
                path: PATHS.NOT_FOUND,
                Component: PageNotFound,
            },
        ],
    },
]);
