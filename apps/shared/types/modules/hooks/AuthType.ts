export type AuthType = {
    isLoggedIn: boolean;
    removeToken: () => void;
    handleLogin: () => void;
    sessionId: string;
};
