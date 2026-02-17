import { Fragment } from 'react/jsx-runtime';

import { Box, Divider, List, useMediaQuery, useTheme } from '@mui/material';

import { CardItem, SectionCard } from '@components';

import { LATEST_CUSTOMERS, TOP_PRODUCTS } from './DashboardList.constants';

export function DashboardListContainer() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('smallDesktop'));

    return (
        <Box
            display="flex"
            gap={theme.spacing(4)}
            flexDirection={isDesktop ? 'row' : 'column'}
        >
            <SectionCard title="Latest Customers">
                <List>
                    {LATEST_CUSTOMERS.map((customer, index) => (
                        <Fragment key={customer.id}>
                            <CardItem {...customer} />
                            {index < LATEST_CUSTOMERS.length - 1 && (
                                <Divider
                                    color={theme.palette.grey[200]}
                                    variant="middle"
                                />
                            )}
                        </Fragment>
                    ))}
                </List>
            </SectionCard>
            <SectionCard title="Top Products">
                <List>
                    {TOP_PRODUCTS.map((product, index) => (
                        <Fragment key={product.id}>
                            <CardItem {...product} />
                            {index < TOP_PRODUCTS.length - 1 && (
                                <Divider
                                    color={theme.palette.grey[200]}
                                    variant="middle"
                                />
                            )}
                        </Fragment>
                    ))}
                </List>
            </SectionCard>
        </Box>
    );
}
