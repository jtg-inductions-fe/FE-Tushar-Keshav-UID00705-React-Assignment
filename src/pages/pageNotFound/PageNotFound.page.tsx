import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { ErrorView } from '@components';
import { PAGE_NOT_FOUND } from '@constant';

export function PageNotFound() {
    const navigate = useNavigate();
    const onClick = () => {
        void navigate('/');
    };
    
    const location = useLocation();
    useEffect(()=> {
        console.error("Invalid path accessed", location.pathname)
    }, [location.pathname]);
    return <ErrorView error={{ ...PAGE_NOT_FOUND }} onClick={onClick} />;
}
