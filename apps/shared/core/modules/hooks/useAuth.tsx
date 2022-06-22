import { useEffect, useState } from "react";

type AuthType = {
    isLogin: boolean;
    removeToken: () => void;
    handleLogin: () => void;
    sessionId: string;
};

const useAuth = (): AuthType => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            setIsLogin(true);
            setSessionId(token);
        }
    }, []);
    const removeToken = () => {
        sessionStorage.removeItem("token");
        setIsLogin(false);
    };
    const handleLogin = () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };
    return { isLogin, removeToken, handleLogin, sessionId };
};

export default useAuth;
