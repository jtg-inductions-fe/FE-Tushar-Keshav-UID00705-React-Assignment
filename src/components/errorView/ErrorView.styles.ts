import { Stack, StackProps, styled } from '@mui/material';

export const StyledStack = styled(Stack)<StackProps>(({}) => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
}));
