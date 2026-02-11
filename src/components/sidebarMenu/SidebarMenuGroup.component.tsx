import { ExpandMore } from '@mui/icons-material';
import { List, ListItem } from '@mui/material';

import { StyledAccordion, StyledAccordionSummary } from './SidebarMenu.styles';
import { SidebarMenuItemDetails } from './SidebarMenu.types';
import { SidebarMenuListItem } from './SidebarMenuListItem.component';

export function SidebarMenuList(sideBarItem: SidebarMenuItemDetails) {
    if (sideBarItem.childrens) {
        const subMenu = sideBarItem.childrens.map((childItem) =>
            SidebarMenuList(childItem),
        );
        return (
            <ListItem key={sideBarItem.id}>
                <StyledAccordion elevation={0}>
                    <StyledAccordionSummary expandIcon={<ExpandMore />}>
                        <SidebarMenuListItem
                            item={sideBarItem}
                            disablePadding={true}
                        />
                    </StyledAccordionSummary>
                    <StyledAccordionSummary>
                        <List disablePadding={true}>{subMenu}</List>
                    </StyledAccordionSummary>
                </StyledAccordion>
            </ListItem>
        );
    } else {
        return <SidebarMenuListItem item={sideBarItem} />;
    }
}
