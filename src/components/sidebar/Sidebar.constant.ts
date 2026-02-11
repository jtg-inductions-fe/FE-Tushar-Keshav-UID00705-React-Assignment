import { SidebarMenuItemDetails } from 'components/sidebarMenu/SidebarMenu.types';

import { ResponsiveWidth } from '@typeDefs';

export const DRAWER_WIDTH: ResponsiveWidth = {
    mobile: '100%',
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
        },
        {
            id: 2,
            name: 'Pages',
            icon: 'document',
            childrens: [
                {
                    id: 3,
                    name: 'Product List',
                },
                {
                    id: 4,
                    name: 'Billing',
                },
                {
                    id: 5,
                    name: 'Invoice',
                },
            ],
        },
        {
            id: 6,
            name: 'Messages',
            icon: 'inbox',
            notificationCount: 1,
        },
        {
            id: 7,
            name: 'Authentication',
            icon: 'lock',
            childrens: [
                {
                    id: 8,
                    name: 'Change Password',
                },
            ],
        },
    ],
    [
        {
            id: 9,
            name: 'Docs',
            icon: 'report',
        },
        {
            id: 10,
            name: 'Components',
            icon: 'components',
        },
        {
            id: 11,
            name: 'Help',
            icon: 'support',
        },
    ],
];
