import PublicLayout from 'layout/PublicLayout';
import { createBrowserRouter } from 'react-router';

import { Dashboard } from '@pages/overview/index';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: PublicLayout,
        children: [
            {
                path: '/overview',
                Component: Dashboard,
            },
            // TODO: Adding rest of the paths
        ],
    },
]);
