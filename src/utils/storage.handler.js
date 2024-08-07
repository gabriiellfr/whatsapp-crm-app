const storeUserData = async (userData) => {
    await localStorage.setItem('user', JSON.stringify(userData.user));
    await localStorage.setItem('accessToken', userData.tokens.access.token);
    await localStorage.setItem('refreshToken', userData.tokens.refresh.token);
};

const getUserData = async () => {
    const user = await localStorage.getItem('user');
    const accessToken = await localStorage.getItem('accessToken');
    const refreshToken = await localStorage.getItem('refreshToken');

    return {
        user: user ? JSON.parse(user) : null,
        accessToken,
        refreshToken,
    };
};

const removeUserData = async () => {
    await localStorage.removeItem('user');
    await localStorage.removeItem('accessToken');
    await localStorage.removeItem('refreshToken');
};

export { storeUserData, getUserData, removeUserData };
