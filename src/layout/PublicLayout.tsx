import { Outlet } from 'react-router-dom';

import { Toolbar } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

import { Header, Sidebar } from '@components';

export default function PublicLayout() {
    return (
        <Grid2 container>
            <Header></Header>
            <Toolbar />

            <Sidebar></Sidebar>
            <Outlet />
        </Grid2>
    );
}
