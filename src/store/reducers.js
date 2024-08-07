import { combineReducers } from 'redux';

import { authSlice, themeSlice } from './slices';

const rootReducer = combineReducers({
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
});

export default rootReducer;
