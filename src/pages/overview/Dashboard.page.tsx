import { CardItem } from 'components/cardItem';
import { QuiltedImageList } from 'components/imageList/ImageList.component';
import { CustomLineChart } from 'components/lineChart/LineChart.component';

import {
    Box,
    Divider,
    Grid2,
    List,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { SectionCard } from '@components';

import {
    DATA_POINTS,
    IMAGE_DATA,
    LATEST_CUSTOMERS,
    TOP_PRODUCTS,
} from './Dashboard.constants';

export function Dashboard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
    return (
        <Grid2 container padding={theme.spacing(4)}>
            <QuiltedImageList images={IMAGE_DATA} />
            <Box
                display="flex"
                flexDirection="column"
                minWidth="100%"
                gap={theme.spacing(4)}
            >
                <SectionCard title="Sales" toolTipText="Sales data">
                    <Box width="100%">
                        <CustomLineChart data={DATA_POINTS} />
                    </Box>
                </SectionCard>
                <Box
                    display="flex"
                    gap={theme.spacing(4)}
                    flexDirection={isMobile ? 'column' : 'row'}
                >
                    <SectionCard title="Latest Customers">
                        <List>
                            {LATEST_CUSTOMERS.map((customer, index) => (
                                <>
                                    <CardItem key={customer.id} {...customer} />
                                    {index < TOP_PRODUCTS.length - 1 && (
                                        <Divider
                                            color={theme.palette.grey[200]}
                                            variant="middle"
                                        />
                                    )}
                                </>
                            ))}
                        </List>
                    </SectionCard>
                    <SectionCard title="Top Products">
                        <List>
                            {TOP_PRODUCTS.map((product, index) => (
                                <>
                                    <CardItem key={product.id} {...product} />
                                    {index < TOP_PRODUCTS.length - 1 && (
                                        <Divider
                                            color={theme.palette.grey[200]}
                                            variant="middle"
                                        />
                                    )}
                                </>
                            ))}
                        </List>
                    </SectionCard>
                </Box>
            </Box>
        </Grid2>
    );
}
