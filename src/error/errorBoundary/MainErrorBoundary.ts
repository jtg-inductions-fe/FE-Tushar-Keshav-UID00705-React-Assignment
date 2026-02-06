<<<<<<< HEAD
import React, { ErrorInfo, ReactNode } from 'react';

import { ErrorState, FallbackProps } from './MainErrorBoundary.types';

/**
 * Base ErrorBoundary class, it renders the fallback component if provided
 * else render nothing
 */
=======
import React, { ReactNode } from 'react';

import { ErrorState, FallbackProps } from './MainErrorBoundary.types';

>>>>>>> 3655c66 (Created Error Boundary)
export class MainErrorBoundary extends React.Component<
    FallbackProps,
    ErrorState
> {
    state: ErrorState = {
        hasError: false,
    };
<<<<<<< HEAD

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
=======
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render(): ReactNode {
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }
>>>>>>> 3655c66 (Created Error Boundary)
        return this.props.children;
    }
}
