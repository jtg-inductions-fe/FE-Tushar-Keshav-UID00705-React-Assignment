import { ErrorView } from '@components';
import { pageNotFound } from '@constant';

export default function PageNotFound() {
    return <ErrorView {...pageNotFound} />;
}
