import { theme } from '@theme';

import { ButtonStyles } from './Button.types';

export const buttonStyle: ButtonStyles = {
    paddingHorizontal: theme.typography.pxToRem(16),
    paddingVertical: theme.typography.pxToRem(10),
    borderRadius: theme.typography.pxToRem(12),
};
