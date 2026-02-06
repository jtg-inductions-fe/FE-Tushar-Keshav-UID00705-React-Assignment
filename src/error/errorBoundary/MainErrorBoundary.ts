import React, { ReactNode } from 'react';

import { ErrorState, FallbackProps } from './MainErrorBoundary.types';

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
