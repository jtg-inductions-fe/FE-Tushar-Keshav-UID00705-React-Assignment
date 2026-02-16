import { Transaction } from '@components';

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        details: 'Payment from',
        partyName: 'Bonnie Green',
        amount: 2300,
        date: new Date('Apr 23, 2021'),
        status: 'Completed',
    },
    {
        id: 2,
        details: 'Payment refund to',
        partyName: 'Bonn',
        amount: -670,
        date: new Date('Apr 23, 2021'),
        status: 'Completed',
    },
    {
        id: 3,
        details: 'Payment failed from',
        partyName: 'Jese Leos',
        amount: 234,
        date: new Date('Apr 18, 2021'),
        status: 'Cancelled',
    },
    {
        id: 4,
        details: 'Payment from',
        partyName: 'Bonnie Green',
        amount: 5000,
        date: new Date('Apr 15, 2021'),
        status: 'In progress',
    },
    {
        id: 5,
        details: 'Payment from',
        partyName: 'Jese Leos',
        amount: 2300,
        date: new Date('Apr 15, 2021'),
        status: 'In progress',
    },
    {
        id: 6,
        details: 'Payment from',
        partyName: 'THEMSBERG LLC',
        amount: 280,
        date: new Date('Apr 11, 2021'),
        status: 'Completed',
    },
];
