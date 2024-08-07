import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { RouterProvider, ThemeProvider } from './providers';

import GlobalStyle from './styles/GlobalStyle';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <GlobalStyle />
                <RouterProvider />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
