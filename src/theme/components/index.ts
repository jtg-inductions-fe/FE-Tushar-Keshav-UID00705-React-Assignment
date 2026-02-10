import { typography } from 'theme/foundations';

import type { Components } from '@mui/material/styles';

import {
    InterBoldTTF,
    InterBoldWOFF2,
    InterLightTTF,
    InterLightWOFF2,
    InterMediumTTF,
    InterMediumWOFF2,
    InterRegularTTF,
    InterRegularWOFF2,
} from '@assets/fonts';

const fontFaceDeclarations = `
       @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterRegularWOFF2}) format('woff2'), 
        url(${InterRegularTTF}) format('truetype');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(${InterMediumWOFF2}) format('woff2'), 
        url(${InterMediumTTF}) format('truetype');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url(${InterBoldWOFF2}) format('woff2'), 
        url(${InterBoldTTF}) format('truetype');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterLightWOFF2}) format('woff2'), 
        url(${InterLightTTF}) format('truetype');
      }
    `;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            fontFaceDeclarations,
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
                borderRadius: typography.typographyUtil.pxToRem(12),
                padding: `${typography.typographyUtil.pxToRem(10)} ${typography.typographyUtil.pxToRem(16)}`,
            },
        },
    },
};
