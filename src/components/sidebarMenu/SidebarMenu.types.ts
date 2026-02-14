import { IconType } from './SidebarMenu.constant';

export type SidebarMenuItemDetails = {
    id: number;
    name: string;
    childrens?: SidebarMenuItemDetails[];
    icon?: IconType;
    notificationCount?: number;
    path: string;
};

export type SidebarMenuProps = {
    groups: SidebarMenuItemDetails[][];
    onMenuItemClick: (path: string) => void;
};

export type SidebarMenuItemProps = {
    item: SidebarMenuItemDetails;
    onMenuItemClick: (path: string) => void;
    disablePadding?: boolean;
};

export type SidebarMenuListProps = {
    item: SidebarMenuItemDetails;
    onMenuItemClick: (path: string) => void;
    activeAccordionId: number;
    onAccordionClick: (id: number) => void;
};
