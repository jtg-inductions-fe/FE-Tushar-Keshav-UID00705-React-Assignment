export type Transaction = {
    id: number;
    details: string;
    partyName: string;
    amount: number;
    date: Date;
    status: STATUS;
};

export const STATUS_COLOR_MAP = {
    Cancelled: 'error',
    'In progress': 'info',
    Completed: 'success',
} as const;

export type STATUS = keyof typeof STATUS_COLOR_MAP;

export type TransactionTableProps<T> = {
    transactions: T[];
    transform: (data: T) => Transaction;
};
