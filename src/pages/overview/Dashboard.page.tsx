import { Box, Grid2, useTheme } from '@mui/material';

import { Footer, QuiltedImageList } from '@components';
import {
    DashboardChartContainer,
    DashboardListContainer,
    DashboardTransactionContainer,
} from '@container';

import { IMAGE_DATA } from './Dashboard.constants';

export function Dashboard() {
    const theme = useTheme();
    return (
        <Grid2 container padding={theme.spacing(4)}>
            <QuiltedImageList images={IMAGE_DATA} />
            <Box
                display="flex"
                flexDirection="column"
                minWidth="100%"
                gap={theme.spacing(4)}
            >
                <DashboardChartContainer />
                <DashboardListContainer />

                <DashboardTransactionContainer />
                <Footer />
            </Box>
        </Grid2>
    );
}
