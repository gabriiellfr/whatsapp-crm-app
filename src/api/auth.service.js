// api/auth.js

import { post } from './http.service';

const API_BASE_URL = 'http://localhost:3001';

const loginWithPassword = async (userData) => {
    try {
        const response = await post(`${API_BASE_URL}/v1/auth/login`, userData);
        return response;
    } catch (error) {
        throw error;
    }
};

const registerWithPassword = async (userData) => {
    try {
        const response = await post(
            `${API_BASE_URL}/v1/auth/register`,
            userData,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

const refreshTokens = async (tokens) => {
    try {
        const response = await post(
            `${API_BASE_URL}/v1/auth/refresh-tokens`,
            tokens,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export { registerWithPassword, loginWithPassword, refreshTokens };
