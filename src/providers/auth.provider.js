import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    initialize as initializeAction,
    loginStart,
    loginSuccess,
    loginFailure,
} from '../store/slices';

import {
    registerWithPassword,
    loginWithPassword,
    refreshTokens,
} from '../api/auth.service';
import { storeUserData, getUserData } from '../utils/storage.handler';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const state = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const initialize = async () => {
        try {
            const tokens = await getUserData();

            const refresedTokens = await refreshTokensFn(tokens);

            dispatch(initializeAction(refresedTokens.user || null));
        } catch (error) {
            console.error('Error initializing authentication:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refreshTokensFn = async (tokens) => {
        try {
            const refreshedTokens = await refreshTokens(tokens);

            if (refreshedTokens) storeUserData(refreshedTokens);
            dispatch(loginSuccess(refreshedTokens.user));

            return refreshedTokens;
        } catch (error) {
            throw error;
        }
    };

    const registerFn = async (userData) => {
        try {
            const userCreatedData = await registerWithPassword(userData);
            return userCreatedData;
        } catch (error) {
            throw error;
        }
    };

    const loginFn = async (userData) => {
        dispatch(loginStart());
        try {
            const authData = await loginWithPassword({
                email: userData.email,
                password: userData.password,
            });

            if (authData) storeUserData(authData);
            dispatch(loginSuccess(authData.user));

            return authData;
        } catch (error) {
            dispatch(loginFailure(error.message));
            throw error;
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <AuthContext.Provider
            value={{
                state,
                user: state.user,
                registerFn,
                loginFn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
