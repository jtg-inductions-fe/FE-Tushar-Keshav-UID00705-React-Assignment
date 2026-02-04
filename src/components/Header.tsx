import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <Typography variant="h5">Hello Header</Typography>
            </Toolbar>
        </AppBar>
    );
}
