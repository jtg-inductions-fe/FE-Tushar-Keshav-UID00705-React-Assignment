import { useCallback, useState } from 'react';

import PopoverCard from 'components/popoverCard/PopoverCard';
import { SearchBar } from 'components/searchBar';
import { CenteredStack, StyledAvatar } from 'components/styledComponent';
import { useNavigate } from 'react-router-dom';

import { CircleNotifications } from '@mui/icons-material';
import { Box, IconButton, Stack, Toolbar } from '@mui/material';

import { theme } from '@theme';

import { logoPath, userDetails } from './Header.constant';
import { StyledAppBar } from './Header.styles';
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
            <Toolbar>
                <Stack
                    direction={'row'}
                    flexGrow={1}
                    spacing={theme.spacing(8)}
                    useFlexGap={true}
                >
                    <Box component="img" src={logoPath}></Box>
                    <SearchBar<Product>
                        getOptions={getOptions}
                        onOptionSelect={onOptionSelect}
                    />
                </Stack>
                <Box flexGrow={1} />
                <CenteredStack direction="row" spacing={3} useFlexGap={true}>
                    <CircleNotifications
                        fontSize={'large'}
                        htmlColor={theme.palette.secondary.main}
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
            </Toolbar>
        </StyledAppBar>
    );
}
