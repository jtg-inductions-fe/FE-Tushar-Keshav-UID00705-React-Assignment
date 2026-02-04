import { Toolbar, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

export default function Dashboard() {
    return (
        <Grid2>
            <Toolbar />
            <Typography variant="h1" color="primary">
                h1: Nothing to show here....
            </Typography>
            <Typography variant="h2" color="info">
                h2: Nothing to show here....
            </Typography>
            <Typography variant="subtitle1" color="error">
                subtitle1: Nothing to show here....
            </Typography>
            <Typography variant="subtitle2">
                subtitle2: Nothing to show here....
            </Typography>
            <Typography variant="body1">
                body1: Nothing to show here....
            </Typography>
            <Typography variant="body2">
                body2: Nothing to show here....
            </Typography>
            <Typography variant="caption">
                caption: Nothing to show here....
                <br />
            </Typography>
            <Typography variant="overline">
                overline: Nothing to show here....
            </Typography>
        </Grid2>
    );
}
