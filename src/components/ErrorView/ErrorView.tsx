import { StyledButton } from 'components/button';
import { CenteredStack, StyledTypography } from 'components/styledComponent';

import { Box } from '@mui/material';

import { theme } from '@theme';
import { ErrorDetails } from '@types';

import { imgMaxWidth } from './ErrorView.constant';
import { StyledStack } from './ErrorView.styles';

export default function ErrorView({
    imgSrc,
    title,
    subtext,
    buttonText,
}: ErrorDetails) {
    return (
        <StyledStack spacing={4} useFlexGap={true}>
            <Box component="img" src={imgSrc} maxWidth={imgMaxWidth}></Box>
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
                    <StyledButton variant="contained">
                        {' '}
                        {buttonText}{' '}
                    </StyledButton>
                </CenteredStack>
            </CenteredStack>
        </StyledStack>
    );
}
