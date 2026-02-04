import { Outlet } from 'react-router-dom';

import Grid2 from '@mui/material/Grid2';

import { Header, Sidebar } from '@components';

export default function PublicLayout() {
    return (
        <Grid2 container>
            <Header></Header>
            <Sidebar></Sidebar>
            <Outlet />
        </Grid2>
    );
}
