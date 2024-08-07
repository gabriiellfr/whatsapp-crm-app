import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import {
    AuthProvider,
    RouterProvider,
    ThemeProvider,
    ToastProvider,
} from './providers';

import GlobalStyle from './styles/GlobalStyle';

const App = () => {
    return (
        <ToastProvider>
            <Provider store={store}>
                <ThemeProvider>
                    <AuthProvider>
                        <GlobalStyle />
                        <RouterProvider />
                    </AuthProvider>
                </ThemeProvider>
            </Provider>
        </ToastProvider>
    );
};

export default App;
