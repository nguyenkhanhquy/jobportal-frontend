// Token
export const KEY_TOKEN = "accessToken";
export const EXPIRATION_TIME = "tokenExpiration";

export const setToken = (accessToken) => {
    const expirationTime = new Date().getTime() + 3600 * 1000;
    localStorage.setItem(KEY_TOKEN, accessToken);
    localStorage.setItem(EXPIRATION_TIME, expirationTime);
};

export const getToken = () => {
    const accessToken = localStorage.getItem(KEY_TOKEN);
    const expirationTime = parseInt(localStorage.getItem(EXPIRATION_TIME), 10);

    // Kiểm tra nếu token hoặc expirationTime không tồn tại hoặc đã hết hạn
    if (!accessToken || !expirationTime || new Date().getTime() > expirationTime) {
        removeToken();
        return null;
    }

    return accessToken;
};

export const removeToken = () => {
    localStorage.removeItem(KEY_TOKEN);
    localStorage.removeItem(EXPIRATION_TIME);
};

// Remember login
export const KEY_REMEMBER_ME = "rememberMe";
export const KEY_EMAIL = "email";
export const KEY_PASSWORD = "password";

export const setRememberMe = (email, password) => {
    localStorage.setItem(KEY_REMEMBER_ME, true);
    localStorage.setItem(KEY_EMAIL, email);
    localStorage.setItem(KEY_PASSWORD, password);
};

export const getRememberMe = () => {
    const rememberMe = localStorage.getItem(KEY_REMEMBER_ME);
    const email = localStorage.getItem(KEY_EMAIL);
    const password = localStorage.getItem(KEY_PASSWORD);

    return {
        rememberMe: rememberMe === "true",
        email,
        password,
    };
};

export const removeRememberMe = () => {
    localStorage.removeItem(KEY_REMEMBER_ME);
    localStorage.removeItem(KEY_EMAIL);
    localStorage.removeItem(KEY_PASSWORD);
};
