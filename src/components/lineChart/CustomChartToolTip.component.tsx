import { TooltipContentProps } from 'recharts';
import {
    NameType,
    ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

import { Box, Typography, useTheme } from '@mui/material';

import { Dot, TooltipCard } from './LineChart.styles';

export function CustomChartToolTip({
    active,
    payload,
    label,
}: TooltipContentProps<ValueType, NameType>) {
    const theme = useTheme();
    if (active && payload && payload.length) {
        const value = (payload[0] as { value: number }).value;
        const formattedValue = `$${value / 1000}k`;

        return (
            <TooltipCard elevation={0}>
                <Typography variant="caption" color={theme.palette.grey[600]}>
                    {label}
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                    <Dot />
                    <Typography variant="body1" color={theme.palette.grey[500]}>
                        Sales:
                    </Typography>
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        color={theme.palette.grey[900]}
                    >
                        {formattedValue}
                    </Typography>
                </Box>
            </TooltipCard>
        );
    }
    return null;
}
