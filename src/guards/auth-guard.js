import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useAuth } from '../providers/auth.provider';

export const AuthGuard = (props) => {
    const { children } = props;

    const navigate = useNavigate();
    const { state } = useAuth();
    const { isAuthenticated, isLoading } = state;

    const ignore = useRef(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (ignore.current || isLoading) return;

        ignore.current = true;

        if (!isAuthenticated) {
            toast.info('Please authenticate.');
            navigate('/login');
        } else setChecked(true);
    }, [navigate, isAuthenticated, isLoading]);

    if (!checked) return null;

    return children;
};
