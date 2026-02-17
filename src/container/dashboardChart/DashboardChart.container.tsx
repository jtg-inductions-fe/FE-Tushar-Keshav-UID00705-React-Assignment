import { Box } from '@mui/material';

import { CustomLineChart, SectionCard } from '@components';

import { DATA_POINTS } from './DashboardChart.constants';

export function DashboardChartContainer() {
    return (
        <SectionCard title="Sales" toolTipText="Sales data">
            <Box width="100%">
                <CustomLineChart data={DATA_POINTS} />
            </Box>
        </SectionCard>
    );
}
