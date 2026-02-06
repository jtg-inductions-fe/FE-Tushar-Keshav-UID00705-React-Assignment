import { Button, ButtonProps, styled } from '@mui/material';

import { buttonStyle } from './Button.constant';

export const StyledButton = styled(Button)<ButtonProps>(() => ({
    padding: buttonStyle.paddingVertical + ' ' + buttonStyle.paddingHorizontal,
    borderRadius: buttonStyle.borderRadius,
    textTransform: 'none',
}));
