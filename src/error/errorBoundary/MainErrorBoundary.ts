import React, { ErrorInfo, ReactNode } from 'react';

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

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("Error Boundary caught an error:", error, info.componentStack);

    }

    render(): ReactNode {
        // Check if the state has error return fallback component if provided else null
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }
        // return child component in case of no error found
        return this.props.children;
    }
}
