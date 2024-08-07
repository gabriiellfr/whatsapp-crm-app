// src/routes/index.js
import {
    RouterProvider as RouterProviderRRD,
    createBrowserRouter,
    Navigate,
} from 'react-router-dom';

import { appRoutes, authRoutes } from '../routes';

const router = createBrowserRouter([
    appRoutes,
    authRoutes,
    { path: '*', element: <Navigate to="/" replace /> },
]);

const RouterProvider = () => {
    return (
        <RouterProviderRRD
            router={router}
            fallbackElement={<p>Initial Load...</p>}
        />
    );
};

export default RouterProvider;
