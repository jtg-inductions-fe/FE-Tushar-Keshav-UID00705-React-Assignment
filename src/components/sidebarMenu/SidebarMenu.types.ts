import { IconType } from './SidebarMenu.constant';

export type SidebarMenuItemDetails = {
    id: number;
    name: string;
    childrens?: SidebarMenuItemDetails[];
    icon?: IconType;
    notificationCount?: number;
};

export interface SidebarMenuProps {
    groups: SidebarMenuItemDetails[][];
}

export interface SidebarMenuItemProps {
    item: SidebarMenuItemDetails;
    disablePadding?: boolean;
}
