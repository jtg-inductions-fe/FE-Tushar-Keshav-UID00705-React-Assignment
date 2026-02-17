import { SectionCard, TransactionTable } from '@components';

import { TRANSACTIONS } from './DashboardTransaction.constants';

export function DashboardTransactionContainer() {
    return (
        <SectionCard
            subtext="This is a list of latest transactions."
            title="Transactions"
        >
            <TransactionTable
                transactions={TRANSACTIONS}
                transform={(transaction) => transaction}
            />
        </SectionCard>
    );
}
