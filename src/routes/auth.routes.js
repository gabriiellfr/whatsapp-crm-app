// src/routes/appRoutes.js

import { AuthLayout } from '../layouts';

import { LoginPage, RegisterPage } from '../pages/auth';

const authRoutes = {
    element: <AuthLayout />,
    children: [
        {
            element: <LoginPage />,
            path: '/login',
        },
        {
            element: <RegisterPage />,
            path: '/register',
        },
    ],
};

export default authRoutes;
