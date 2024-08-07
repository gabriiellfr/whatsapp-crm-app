// src/routes/appRoutes.js

import { AppLayout } from '../layouts';
import { HomePage } from '../pages/app';

import { AuthGuard } from '../guards/auth-guard';

const appRoutes = {
    element: (
        <AuthGuard>
            <AppLayout />
        </AuthGuard>
    ),
    children: [
        {
            element: <HomePage />,
            path: '/',
        },
    ],
};

export default appRoutes;
