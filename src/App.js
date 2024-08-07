import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { ThemeProvider } from './providers';

import GlobalStyle from './styles/GlobalStyle';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <GlobalStyle />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
