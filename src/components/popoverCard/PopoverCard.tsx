import { Popover, Stack, Typography, useTheme } from '@mui/material';

import { StyledAvatar, StyledCard } from '@components';

import { UserCardProps } from './PopoverCard.types';

/**
 * A pop over card which gets attached to a element 
 * @param {UserCardProps} props: 
 * @param {boolean} open - Whether the popover card is open or closed
 * @param {HTMLElement} anchorEl - HTML element with which it gets linked
 * @param {() => void} onClose - Callback, called when the card closes
 * @param {UserProfile} user - Details of the user to show when the card is opened
 * @returns 
 */
export function PopoverCard({ open, anchorEl, onClose, user }: UserCardProps) {
    const theme = useTheme();
    
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
