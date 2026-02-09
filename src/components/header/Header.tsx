import { useCallback, useState } from 'react';

import PopoverCard from 'components/popoverCard/PopoverCard';
import { SearchBar } from 'components/searchBar';
import { CenteredStack, StyledAvatar } from 'components/styledComponent';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Stack } from '@mui/material';

import { theme } from '@theme';

import { logoPath, userDetails } from './Header.constant';
import {
    Logo,
    StyledAppBar,
    StyledNotificationIcon,
    StyledToolbar,
} from './Header.styles';
import { Product } from './Header.types';

export default function Header() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const onOptionSelect = useCallback(async (option: Product) => {
        await navigate(`product/${option.name}`);
    }, []);

    const handleOpen = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        },
        [],
    );

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
        <StyledAppBar elevation={0}>
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
