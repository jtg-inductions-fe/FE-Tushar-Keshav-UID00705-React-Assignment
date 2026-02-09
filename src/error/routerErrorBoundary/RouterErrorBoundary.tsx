import { ErrorView } from '@components';
import { SOMETHING_WENT_WRONG } from '@constant';

export function RouterErrorBoundary() {
    return <ErrorView {...SOMETHING_WENT_WRONG} />;
}
