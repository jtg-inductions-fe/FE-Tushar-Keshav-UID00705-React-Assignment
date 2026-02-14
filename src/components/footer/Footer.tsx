import {
    Facebook,
    GitHub,
    SportsBasketballOutlined,
    Twitter,
} from '@mui/icons-material';
import {
    Box,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

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
                <IconButton>
                    <Facebook htmlColor={theme.palette.grey[900]} />
                </IconButton>
                <IconButton>
                    <Twitter htmlColor={theme.palette.grey[900]} />
                </IconButton>
                <IconButton>
                    <GitHub htmlColor={theme.palette.grey[900]} />
                </IconButton>
                <IconButton>
                    <SportsBasketballOutlined
                        htmlColor={theme.palette.grey[900]}
                    />
                </IconButton>
            </Box>
        </Box>
    );
}
