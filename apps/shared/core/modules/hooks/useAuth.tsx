import { useEffect, useState } from "react";
// types
import { AuthType } from "apps/shared/types/modules/hooks/AuthType";

const useAuth = (): AuthType => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            setSessionId(token);
        }
    }, []);
    const removeToken = () => {
        sessionStorage.removeItem("token");
        setIsLoggedIn(false);
    };
    const handleLogin = () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };
    return { isLoggedIn, removeToken, handleLogin, sessionId };
};

export default useAuth;
