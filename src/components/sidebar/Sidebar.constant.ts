import { SidebarMenuItemDetails } from 'components/sidebarMenu/SidebarMenu.types';

import { ResponsiveWidth } from '@typeDefs';

export const DRAWER_WIDTH: ResponsiveWidth = {
    mobile: '32rem',
    tablet: '40%',
    smallDesktop: '30%',
    desktop: '20%',
    largeDesktop: '15%',
};

export const SIDEBAR_MENU_ITEM_DETAILS: SidebarMenuItemDetails[][] = [
    [
        {
            id: 1,
            name: 'Overview',
            icon: 'overview',
            path: '/overview',
        },
        {
            id: 2,
            name: 'Pages',
            icon: 'document',
            path: '/pages',
            childrens: [
                {
                    id: 3,
                    name: 'Product List',
                    path: '/pages/product-list',
                },
                {
                    id: 4,
                    name: 'Billing',
                    path: '/pages/billing',
                },
                {
                    id: 5,
                    name: 'Invoice',
                    path: '/pages/invoice',
                },
            ],
        },
        {
            id: 6,
            name: 'Messages',
            icon: 'inbox',
            notificationCount: 1,
            path: '/messages',
        },
        {
            id: 7,
            name: 'Authentication',
            icon: 'lock',
            path: '/auth',
            childrens: [
                {
                    id: 8,
                    name: 'Change Password',
                    path: '/auth/change-password',
                },
            ],
        },
    ],
    [
        {
            id: 9,
            name: 'Docs',
            icon: 'report',
            path: '/docs',
        },
        {
            id: 10,
            name: 'Components',
            icon: 'components',
            path: '/components',
        },
        {
            id: 11,
            name: 'Help',
            icon: 'support',
            path: '/help',
        },
    ],
];
