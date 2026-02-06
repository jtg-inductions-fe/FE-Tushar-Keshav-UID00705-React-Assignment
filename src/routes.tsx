import { createBrowserRouter } from 'react-router';

import RouterErrorBoundary from '@error/RouterErrorBoundary';
import { PublicLayout } from '@layout';
import PageNotFound from '@pages/404/PageNotFound';
import { Dashboard } from '@pages/overview/index';

export const router = createBrowserRouter([
    {
        path: '/',
        ErrorBoundary: RouterErrorBoundary,
        Component: PublicLayout,
        children: [
            {
                path: 'overview',
                Component: Dashboard,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
]);
