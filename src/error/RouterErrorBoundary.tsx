import { ErrorView } from '@components';
import { somethingWentWrong } from '@constant';

export default function RouterErrorBoundary() {
    return <ErrorView {...somethingWentWrong} />;
}
