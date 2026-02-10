import { Box, Button, useTheme } from '@mui/material';

import { CenteredStack, StyledTypography } from '@components';
import { ErrorDetailsProp } from '@typeDefs';

import { IMG_MAX_WIDTH } from './ErrorView.constant';

export function ErrorView({ error, onClick }: ErrorDetailsProp) {
    const theme = useTheme();
    return (
        <CenteredStack spacing={4} useFlexGap={true} height="100%">
            <Box
                component="img"
                src={error.imgSrc}
                maxWidth={IMG_MAX_WIDTH}
            ></Box>
            <CenteredStack spacing={5} useFlexGap={true}>
                <CenteredStack spacing={2.5} useFlexGap={true}>
                    <StyledTypography variant="h1">
                        {' '}
                        {error.title}{' '}
                    </StyledTypography>
                    <StyledTypography
                        variant="body1"
                        color={theme.palette.grey[500]}
                    >
                        {error.subtext}{' '}
                    </StyledTypography>
                </CenteredStack>
                <CenteredStack>
                    <Button variant="contained" onClick={onClick}>
                        {' '}
                        {error.buttonText}{' '}
                    </Button>
                </CenteredStack>
            </CenteredStack>
        </CenteredStack>
    );
}
