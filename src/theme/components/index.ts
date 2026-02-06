import type { Components } from '@mui/material/styles';

import InterBoldTTF from '@assets/fonts/inter/inter-bold.ttf';
import InterBoldWOFF2 from '@assets/fonts/inter/inter-bold.woff2';
import InterLightTTF from '@assets/fonts/inter/inter-light.ttf';
import InterLightWOFF2 from '@assets/fonts/inter/inter-light.woff2';
import InterMediumTTF from '@assets/fonts/inter/inter-medium.ttf';
import InterMediumWOFF2 from '@assets/fonts/inter/inter-medium.woff2';
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';

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
};
