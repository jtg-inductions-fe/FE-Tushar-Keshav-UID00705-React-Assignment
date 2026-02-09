import { ErrorView } from '@components';
import { PAGE_NOT_FOUND } from '@constant';

export function PageNotFound() {
    return <ErrorView {...PAGE_NOT_FOUND} />;
}
