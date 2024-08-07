// src/routes/appRoutes.js

import { AppLayout } from '../layouts';
import { HomePage } from '../pages/app';

const appRoutes = {
    element: <AppLayout />,
    children: [
        {
            element: <HomePage />,
            path: '/',
        },
    ],
};

export default appRoutes;
