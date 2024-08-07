import React from 'react';
import { Outlet } from 'react-router-dom';

import { AuthContainer, AuthContent } from './auth.styles';

const AuthLayout = () => {
    return (
        <AuthContainer>
            <AuthContent>
                <Outlet />
            </AuthContent>
        </AuthContainer>
    );
};

export default AuthLayout;
