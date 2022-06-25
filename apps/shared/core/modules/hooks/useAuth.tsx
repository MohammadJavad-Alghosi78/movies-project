import { useEffect, useState, useCallback } from "react";
// types
import { AuthType } from "apps/shared/types/modules/hooks/AuthType";

const useAuth = (): AuthType => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const handleLogin = useCallback(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            setSessionId(token);
        }
    }, [handleLogin]);
    const removeToken = () => {
        sessionStorage.removeItem("token");
        setIsLoggedIn(false);
    };
    return { isLoggedIn, removeToken, handleLogin, sessionId };
};

export default useAuth;
