import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
        contrastText: COLORS.PRIMARY.CONTRAST_TEXT,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
        contrastText: COLORS.SECONDARY.CONTRAST_TEXT,
    },
    background: {
        default: COLORS.BACKGROUND.DEFAULT,
    },
    error: {
        main: COLORS.ERROR.MAIN,
        contrastText: COLORS.ERROR.CONTRAST_TEXT,
    },
    success: {
        main: COLORS.SUCCESS.MAIN,
        contrastText: COLORS.SUCCESS.CONTRAST_TEXT,
    },
    info: {
        main: COLORS.INFO.MAIN,
        contrastText: COLORS.INFO.CONTRAST_TEXT,
    },
    grey: {
        '50': COLORS.GREY[50],
        '100': COLORS.GREY[100],
        '200': COLORS.GREY[200],
        '400': COLORS.GREY[400],
        '500': COLORS.GREY[500],
        '600': COLORS.GREY[600],
        '800': COLORS.GREY[800],
        '900': COLORS.GREY[900],
    },
};
