import { IconButton, useTheme } from '@mui/material';

import { CustomIconButtonProps, ICON_MAP } from './CustomIconButton.types';

export function CustomIconButton({
    icon,
    ariaLabel,
    fontSize = 'medium',
    onClick,
}: CustomIconButtonProps) {
    const theme = useTheme();
    const IconComponent = ICON_MAP[icon];
    return (
        <IconButton onClick={onClick} aria-label={ariaLabel}>
            <IconComponent
                htmlColor={theme.palette.grey[900]}
                fontSize={fontSize}
            />
        </IconButton>
    );
}
