import { Fragment, useState } from 'react';

import { Divider, List } from '@mui/material';

import { SidebarMenuProps } from './SidebarMenu.types';
import { SidebarMenuList } from './SidebarMenuGroup.component';

/**
 *
 * It lay out all the sections and place a divider between them,
 * A section is group of menu list item which belong together.
 * @param { SidebarMenuItemDetails[][] } groups - It takes the list of section, each section have it's own list of item
 * @param {(path: string) => void} onMenuItemClick - A callback to triggers when a option is clicked
 */
export function SidebarMenu({ groups, onMenuItemClick }: SidebarMenuProps) {
    const [activeAccordionId, setActiveAccordionId] = useState(-1);

    const onAccordionClick = (id: number) => {
        if (id !== activeAccordionId) {
            setActiveAccordionId(id);
        } else {
            setActiveAccordionId(-1);
        }
    };
    const list = groups.map((section, index) => (
        <Fragment key={index}>
            <List disablePadding={false}>
                {section.map((item) => (
                    <SidebarMenuList
                        key={item.id}
                        activeAccordionId={activeAccordionId}
                        onAccordionClick={onAccordionClick}
                        item={item}
                        onMenuItemClick={onMenuItemClick}
                    />
                ))}
            </List>
            {index < groups.length - 1 && <Divider />}
        </Fragment>
    ));

    return <nav>{list}</nav>;
}
