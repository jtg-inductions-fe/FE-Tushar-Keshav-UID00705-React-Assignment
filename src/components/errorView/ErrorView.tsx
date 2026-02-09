import { Box, Button } from '@mui/material';

import { CenteredStack, StyledTypography } from '@components';
import { theme } from '@theme';
import { ErrorDetails } from '@types';

import { IMG_MAX_WIDTH } from './ErrorView.constant';

export function ErrorView({
    imgSrc,
    title,
    subtext,
    buttonText,
}: ErrorDetails) {
    return (
        <CenteredStack spacing={4} useFlexGap={true} height={'100%'}>
            <Box component="img" src={imgSrc} maxWidth={IMG_MAX_WIDTH}></Box>
            <CenteredStack spacing={5} useFlexGap={true}>
                <CenteredStack spacing={2.5} useFlexGap={true}>
                    <StyledTypography variant="h1"> {title} </StyledTypography>
                    <StyledTypography
                        variant="body1"
                        color={theme.palette.grey[500]}
                    >
                        {subtext}{' '}
                    </StyledTypography>
                </CenteredStack>
                <CenteredStack>
                    <Button variant="contained"> {buttonText} </Button>
                </CenteredStack>
            </CenteredStack>
        </CenteredStack>
    );
}
