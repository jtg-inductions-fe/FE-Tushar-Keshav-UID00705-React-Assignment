import {
    Box,
    Divider,
    Grid2,
    List,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import {
    CardItem,
    CustomLineChart,
    Footer,
    QuiltedImageList,
    TransactionTable,
} from '@components';
import { SectionCard } from '@components';

import {
    DATA_POINTS,
    IMAGE_DATA,
    LATEST_CUSTOMERS,
    TOP_PRODUCTS,
    TRANSACTIONS,
} from './Dashboard.constants';

export function Dashboard() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('smallDesktop'));
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
                    flexDirection={isDesktop ? 'row' : 'column'}
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
                <SectionCard
                    subtext="This is a list of latest transactions."
                    title="Transactions"
                >
                    <TransactionTable
                        transactions={TRANSACTIONS}
                        transform={(transaction) => transaction}
                    />
                </SectionCard>
                <Footer />
            </Box>
        </Grid2>
    );
}
