import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { useMediaQuery, useTheme } from '@mui/material';

import { CustomChartToolTip } from './CustomChartToolTip.component';
import { LineChartProps } from './LineChart.types';

export function CustomLineChart({ data }: LineChartProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
    return (
        <ResponsiveContainer width="100%" aspect={isMobile ? 0.7 : 2.3}>
            <LineChart
                style={{
                    border: 'none',
                    outline: 'none',
                    overflow: 'visible',
                }}
                responsive={true}
                data={data}
                margin={{ left: 12, bottom: 12, top: 16, right: 12 }}
            >
                <CartesianGrid
                    horizontal={true}
                    vertical={false}
                    strokeWidth={1}
                    stroke={theme.palette.grey[100]}
                />
                <XAxis
                    dataKey="xAxis"
                    interval="preserveStartEnd"
                    angle={isMobile ? -45 : 0}
                    padding={{ left: 10, right: 10 }}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={12}
                    tick={{
                        fontSize: theme.typography.body2.fontSize,
                        fontWeight: theme.typography.fontWeightMedium,
                        color: theme.palette.grey[500],
                    }}
                />
                <YAxis
                    dataKey="yAxis"
                    tickFormatter={(value) => `${value / 1000}K`}
                    domain={[0, 240000]}
                    ticks={[0, 40000, 80000, 120000, 160000, 200000, 240000]}
                    interval="preserveStart"
                    hide={isMobile}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={12}
                    tick={{
                        fontSize: theme.typography.body2.fontSize,
                        fontWeight: theme.typography.fontWeightMedium,
                        color: theme.palette.grey[500],
                    }}
                />
                <Tooltip
                    animationDuration={200}
                    content={CustomChartToolTip}
                    cursor={{
                        strokeDasharray: '5 5',
                        color: theme.palette.grey[200],
                    }}
                />
                <Line
                    type="monotone"
                    stroke={theme.palette.primary.main}
                    dataKey="yAxis"
                    activeDot={{ r: 6, color: '#fff' }}
                    strokeWidth={3}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
