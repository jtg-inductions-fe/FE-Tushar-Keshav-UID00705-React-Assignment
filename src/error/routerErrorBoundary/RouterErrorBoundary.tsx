import { useNavigate } from 'react-router-dom';

import { ErrorView } from '@components';
import { SOMETHING_WENT_WRONG } from '@constant';

export function RouterErrorBoundary() {
    const navigate = useNavigate();
    const onClick = () => {
        void navigate('/');
    };
    return <ErrorView error={{ ...SOMETHING_WENT_WRONG }} onClick={onClick} />;
}
