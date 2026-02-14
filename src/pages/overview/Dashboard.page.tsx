import { QuiltedImageList } from 'components/imageList/ImageList.component';

import { Grid2, useTheme } from '@mui/material';

import { IMAGE_DATA } from './Dashboard.constants';

export function Dashboard() {
    // TODO: This is for the demo purpose
    const theme = useTheme();
    return (
        <Grid2 container padding={theme.spacing(4)}>
            <QuiltedImageList images={IMAGE_DATA} />
        </Grid2>
    );
}
