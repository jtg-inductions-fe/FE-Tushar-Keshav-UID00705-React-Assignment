import type { Components } from '@mui/material/styles';

import {
    InterBoldTTF,
    InterBoldWOFF2,
    InterLightTTF,
    InterLightWOFF2,
    InterMediumTTF,
    InterMediumWOFF2,
    InterRegularTTF,
    InterRegularWOFF2
} from '@fonts';
import { theme } from '@theme';

const fontFaceDeclarations = `
       @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterRegularWOFF2}) format('woff2'), 
        url(${InterRegularTTF}) format('truetype');
      };
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(${InterMediumWOFF2}) format('woff2'), 
        url(${InterMediumTTF}) format('truetype');
      };
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url(${InterBoldWOFF2}) format('woff2'), 
        url(${InterBoldTTF}) format('truetype');
      };
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterLightWOFF2}) format('woff2'), 
        url(${InterLightTTF}) format('truetype');
      };
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
          borderRadius: theme.typography.pxToRem(12),
          padding: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(16)}`
        }
      }
    }
};
