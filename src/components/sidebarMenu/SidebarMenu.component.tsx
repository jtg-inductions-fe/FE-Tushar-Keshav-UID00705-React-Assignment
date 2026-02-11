import { Fragment } from 'react/jsx-runtime';

import { Divider, List } from '@mui/material';

import { SidebarMenuProps } from './SidebarMenu.types';
import { SidebarMenuList } from './SidebarMenuGroup.component';

export function SidebarMenu({ groups }: SidebarMenuProps) {
    const list = groups.map((section, index) => (
        <Fragment key={index}>
            <List>{section.map((item) => SidebarMenuList(item))}</List>
            {index < groups.length - 1 && <Divider />}
        </Fragment>
    ));

    return <nav>{list}</nav>;
}
