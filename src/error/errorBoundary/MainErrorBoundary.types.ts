import { ReactNode } from 'react';

export type ErrorState = {
    hasError: boolean;
};

export type FallbackProps = {
    fallback?: ReactNode;
    children: ReactNode;
};
