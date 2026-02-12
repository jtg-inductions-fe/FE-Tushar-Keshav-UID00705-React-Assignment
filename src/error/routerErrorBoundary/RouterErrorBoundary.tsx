import { useNavigate, useRouteError } from 'react-router-dom';

import { ErrorView } from '@components';
import { SOMETHING_WENT_WRONG } from '@constant';

export function RouterErrorBoundary() {
    const navigate = useNavigate();
    const onClick = () => {
        void navigate('/');
    };

    const error = useRouteError();
    // eslint-disable-next-line no-console
    console.error('React router error caught', error);

    return <ErrorView error={{ ...SOMETHING_WENT_WRONG }} onClick={onClick} />;
}
