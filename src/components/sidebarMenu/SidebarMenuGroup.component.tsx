import { ExpandMore } from '@mui/icons-material';
import { ListItem } from '@mui/material';

import {
    StyledAccordion,
    StyledAccordionDetails,
    StyledAccordionSummary,
    StyledList,
} from './SidebarMenu.styles';
import { SidebarMenuListProps } from './SidebarMenu.types';
import { SidebarMenuListItem } from './SidebarMenuListItem.component';

export function SidebarMenuList({
    item,
    onMenuItemClick,
    activeAccordionId,
    onAccordionClick,
}: SidebarMenuListProps) {
    if (item.childrens) {
        const subMenu = item.childrens.map((childItem) => (
            <SidebarMenuList
                key={childItem.id}
                activeAccordionId={activeAccordionId}
                onAccordionClick={onAccordionClick}
                item={childItem}
                onMenuItemClick={onMenuItemClick}
            />
        ));
        return (
            <ListItem>
                <StyledAccordion
                    elevation={0}
                    disableGutters
                    square
                    expanded={activeAccordionId == item.id}
                    onChange={() => onAccordionClick(item.id)}
                >
                    <StyledAccordionSummary expandIcon={<ExpandMore />}>
                        <SidebarMenuListItem
                            key={item.id}
                            onMenuItemClick={() => {}}
                            item={item}
                            disablePadding={true}
                        />
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        <StyledList disablePadding={true}>{subMenu}</StyledList>
                    </StyledAccordionDetails>
                </StyledAccordion>
            </ListItem>
        );
    } else {
        return (
            <SidebarMenuListItem
                key={item.id}
                item={item}
                onMenuItemClick={onMenuItemClick}
            />
        );
    }
}
