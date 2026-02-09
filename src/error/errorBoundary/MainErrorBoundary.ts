import React, { ReactNode } from 'react';

import { ErrorState, FallbackProps } from './MainErrorBoundary.types';

/**
 * Base ErrorBoundary class, it renders the fallback component if provided
 * else render nothing
 */
export class MainErrorBoundary extends React.Component<
    FallbackProps,
    ErrorState
> {
    state: ErrorState = {
        hasError: false,
    };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render(): ReactNode {
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }
        return this.props.children;
    }
}
