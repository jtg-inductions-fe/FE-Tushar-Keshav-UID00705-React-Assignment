import { Avatar, Box, ListItem, Typography, useTheme } from '@mui/material';

import { CardItemProps } from './CardItem.types';

export function CardItem({
    title,
    subtext,
    avatarPath,
    trailingTextPrefix,
    trailingTextSuffix,
}: CardItemProps) {
    const theme = useTheme();
    return (
        <ListItem>
            <Box
                display="flex"
                width="100%"
                alignItems="center"
                gap={theme.spacing(1)}
            >
                <Box display="flex" alignItems="center" gap={theme.spacing(2)}>
                    {avatarPath && <Avatar src={avatarPath} alt="Avatar" />}
                    <Box>
                        <Typography
                            variant="h3"
                            color={theme.palette.grey[900]}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color={theme.palette.grey[500]}
                        >
                            {subtext}
                        </Typography>
                    </Box>
                </Box>
                <Box flexGrow={1} />
                <Box display="flex" flexWrap="nowrap" gap={theme.spacing(1)}>
                    {trailingTextPrefix && (
                        <Typography
                            variant="body2"
                            fontWeight="medium"
                            color={theme.palette.grey[900]}
                        >
                            {trailingTextPrefix}
                        </Typography>
                    )}
                    {trailingTextSuffix && (
                        <Typography
                            variant="body2"
                            color={theme.palette.grey[600]}
                        >
                            {trailingTextSuffix}
                        </Typography>
                    )}
                </Box>
            </Box>
        </ListItem>
    );
}
