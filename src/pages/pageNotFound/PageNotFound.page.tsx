import { useNavigate } from 'react-router-dom';

import { ErrorView } from '@components';
import { PAGE_NOT_FOUND } from '@constant';

export function PageNotFound() {
    const navigate = useNavigate();
    const onClick = () => {
        void navigate('/');
    };
    return <ErrorView error={{ ...PAGE_NOT_FOUND }} onClick={onClick} />;
}
