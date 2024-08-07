import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        initialize: (state, action) => {
            const user = action.payload;
            state.isAuthenticated = !!user;
            state.isLoading = false;
            state.user = user || null;
        },
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            const user = action.payload;

            state.isLoading = false;
            state.isAuthenticated = true;

            state.user = user;
            state.error = null;
        },
        loginFailure: (state, action) => {
            const error = action.payload;

            state.isLoading = false;
            state.isAuthenticated = false;

            state.user = null;
            state.error = error;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { initialize, loginStart, loginSuccess, loginFailure, logout } =
    authSlice.actions;
export default authSlice.reducer;
