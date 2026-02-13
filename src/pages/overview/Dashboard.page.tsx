import { QuiltedImageList } from 'components/imageList/ImageList.component';
import { CustomLineChart } from 'components/lineChart/LineChart.component';

import { Box, Grid2, useTheme } from '@mui/material';

import { SectionCard } from '@components';

import { DATA_POINTS, IMAGE_DATA } from './Dashboard.constants';

export function Dashboard() {
    const theme = useTheme();
    return (
        <Grid2 container padding={theme.spacing(4)}>
            <QuiltedImageList images={IMAGE_DATA} />
            <SectionCard spacing={4} title="Sales" toolTipText="Sales data">
                <Box width="100%">
                    <CustomLineChart data={DATA_POINTS} />
                </Box>
            </SectionCard>
        </Grid2>
    );
}
