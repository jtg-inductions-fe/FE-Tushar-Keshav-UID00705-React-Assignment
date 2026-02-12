import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Stack, useTheme } from '@mui/material';

import {
    CenteredStack,
    PopoverCard,
    SearchBar,
    StyledAvatar,
} from '@components';

import { logoPath, userDetails } from './Header.constant';
import {
    Logo,
    StyledAppBar,
    StyledNotificationIcon,
    StyledToolbar,
} from './Header.styles';
import { Product } from './Header.types';

/**
 * @returns returns the Header JSX
 */
export function Header() {
    const theme = useTheme();
    const navigate = useNavigate();

    // To handle opening and closing of profile card
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpen = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        },
        [],
    );

    // Callback for search bar when a particular option is selected
    const onOptionSelect = useCallback(
        async (option: Product) => {
            await navigate(`product/${option.name}`);
        },
        [navigate],
    );

    // Callback for search bar to get `Options` from input string
    const getOptions = useCallback(
        async (input: string): Promise<Product[]> => {
            const res = await fetch(
                `http://localhost:3000/top-products?name_like=${input}`,
            );
            const data = (await res.json()) as Array<Product>;
            return data;
        },
        [],
    );

    return (
        <StyledAppBar elevation={0} position="static">
            <StyledToolbar>
                <Stack
                    direction={'row'}
                    flexGrow={1}
                    spacing={theme.spacing(8)}
                    useFlexGap={true}
                >
                    <Logo component="img" src={logoPath} alt={'logo'}></Logo>
                    <SearchBar<Product>
                        getOptions={getOptions}
                        onOptionSelect={onOptionSelect}
                    />
                </Stack>
                <Box flexGrow={1} />
                <CenteredStack direction="row" spacing={3} useFlexGap={true}>
                    <StyledNotificationIcon
                        fontSize={'large'}
                        color="secondary"
                        htmlColor="#000"
                    />
                    <IconButton onClick={handleOpen}>
                        <StyledAvatar src={userDetails.avatarPath} />
                    </IconButton>
                    <PopoverCard
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorEl={anchorEl}
                        user={userDetails}
                    />
                </CenteredStack>
            </StyledToolbar>
        </StyledAppBar>
    );
}
