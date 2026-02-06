import { Toolbar, Typography } from '@mui/material';

import { StyledAppBar } from './Header.styles';

export default function Header() {
    return (
        <StyledAppBar>
            <Toolbar>
                <Typography variant="h5">Hello Header</Typography>
            </Toolbar>
        </StyledAppBar>
    );
}
