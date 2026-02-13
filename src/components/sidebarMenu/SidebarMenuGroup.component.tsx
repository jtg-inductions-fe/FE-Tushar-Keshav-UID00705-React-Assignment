import {
    ExpandIcon,
    StyledAccordion,
    StyledAccordionDetails,
    StyledAccordionSummary,
    StyledList,
    StyledListItem,
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
            <StyledListItem>
                <StyledAccordion
                    elevation={0}
                    disableGutters
                    square
                    expanded={activeAccordionId == item.id}
                    onChange={() => onAccordionClick(item.id)}
                >
                    <StyledAccordionSummary expandIcon={<ExpandIcon />}>
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
            </StyledListItem>
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
