import { useLocation } from 'react-router-dom';

import { Badge, Box, ListItemIcon, ListItemText } from '@mui/material';

import { ICON_MAP } from './SidebarMenu.constant';
import { StyledListItem, StyledListItemButton } from './SidebarMenu.styles';
import { SidebarMenuItemProps } from './SidebarMenu.types';

export function SidebarMenuListItem({
    item,
    onMenuItemClick,
    disablePadding,
}: SidebarMenuItemProps) {
    const IconComponent = item.icon ? ICON_MAP[item.icon] : undefined;
    const isActive = useLocation().pathname === item.path;
    return (
        <StyledListItem
            disablePadding={disablePadding}
            disableGutters={disablePadding}
        >
            <StyledListItemButton
                disableRipple
                onClick={() => onMenuItemClick(item.path)}
            >
                {IconComponent && (
                    <ListItemIcon>
                        <IconComponent
                            color={isActive ? 'primary' : 'secondary'}
                        />
                    </ListItemIcon>
                )}
                <ListItemText
                    primary={item.name}
                    slotProps={{
                        primary: {
                            variant: 'subtitle2',
                            color: isActive ? 'primary' : 'secondary',
                        },
                    }}
                    color={isActive ? 'primary' : 'secondary'}
                />
                <Box flexGrow={1} />
                {item.notificationCount && (
                    <Badge
                        badgeContent={item.notificationCount}
                        color="error"
                    />
                )}
            </StyledListItemButton>
        </StyledListItem>
    );
}
