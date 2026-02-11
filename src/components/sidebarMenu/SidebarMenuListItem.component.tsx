import {
    Badge,
    Box,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { ICON_MAP } from './SidebarMenu.constant';
import { SidebarMenuItemProps } from './SidebarMenu.types';

export function SidebarMenuListItem({
    item,
    disablePadding,
}: SidebarMenuItemProps) {
    const IconComponent = item.icon ? ICON_MAP[item.icon] : undefined;
    return (
        <ListItem key={item.id} disablePadding={disablePadding}>
            <ListItemButton>
                <ListItemIcon>
                    {IconComponent && <IconComponent htmlColor="secondary" />}
                </ListItemIcon>
                <ListItemText
                    primary={item.name}
                    slotProps={{
                        primary: {
                            variant: 'subtitle2',
                        },
                    }}
                />
                <Box flexGrow={1} />
                {item.notificationCount && (
                    <Badge
                        badgeContent={item.notificationCount}
                        color="error"
                    />
                )}
            </ListItemButton>
        </ListItem>
    );
}
