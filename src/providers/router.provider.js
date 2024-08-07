// src/routes/index.js
import {
    RouterProvider as RouterProviderRRD,
    createBrowserRouter,
    Navigate,
} from 'react-router-dom';

import appRoutes from '../routes/app.routes';

const router = createBrowserRouter([
    appRoutes,
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
