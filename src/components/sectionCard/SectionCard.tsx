import { PropsWithChildren } from 'react';

import { ErrorOutline } from '@mui/icons-material';
import {
    Box,
    IconButton,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { SectionCardProps } from './SectionCard.types';

export function SectionCard({
    children,
    subtext,
    title,
    toolTipText,
}: PropsWithChildren<SectionCardProps>) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('tablet'));

    return (
        <Box
            display="flex"
            gap={theme.spacing(isMobile ? 4 : 6)}
            flexGrow={1}
            padding={theme.spacing(isMobile ? 4 : 6)}
            flexDirection="column"
            borderRadius={theme.spacing(4)}
            boxShadow={theme.shadows[3]}
        >
            <Box>
                <Box display="flex" gap={theme.spacing(2)} alignItems="center">
                    <Typography variant="h2">{title}</Typography>
                    {toolTipText && (
                        <Tooltip title={toolTipText} placement="top">
                            <IconButton>
                                <ErrorOutline
                                    fontSize="small"
                                    htmlColor={theme.palette.grey[400]}
                                />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
                {subtext && (
                    <Typography variant="body2" color={theme.palette.grey[500]}>
                        {subtext}
                    </Typography>
                )}
            </Box>
            {children}
        </Box>
    );
}
