import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { CustomIconButton } from '@components';

export function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
    return (
        <Box
            display="flex"
            width="100%"
            gap={theme.spacing(8)}
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent="space-between"
            padding={`${theme.spacing(12)} ${theme.spacing(8)}`}
        >
            <Typography variant="body1" color={theme.palette.grey[500]}>
                © 2021 Themesberg, LLC. All rights reserved.
            </Typography>
            <Box display="flex" gap={theme.spacing(1)}>
                <CustomIconButton icon="facebook" ariaLabel="facebook" />
                <CustomIconButton icon="twitter" ariaLabel="twiiter" />
                <CustomIconButton icon="gitHub" ariaLabel="github" />
                <CustomIconButton icon="basketBall" ariaLabel="basketball" />
            </Box>
        </Box>
    );
}
