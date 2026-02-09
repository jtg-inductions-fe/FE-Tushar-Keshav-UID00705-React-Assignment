import { Popover, Stack, Typography } from '@mui/material';

import { StyledAvatar, StyledCard } from '@components';
import { theme } from '@theme';

import { UserCardProps } from './PopoverCard.types';

export function PopoverCard({ open, anchorEl, onClose, user }: UserCardProps) {
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <StyledCard>
                <Stack spacing={1} alignItems="center">
                    <StyledAvatar
                        src={user.avatarPath}
                        alt={user.name}
                    ></StyledAvatar>
                    <Stack spacing={1} alignItems="center">
                        <Typography
                            fontWeight={theme.typography.fontWeightBold}
                        >
                            {user.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {user.email}
                        </Typography>
                    </Stack>
                </Stack>
            </StyledCard>
        </Popover>
    );
}
