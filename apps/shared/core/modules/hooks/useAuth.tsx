import { useEffect, useState } from "react";

type AuthType = {
    isLogin: boolean;
    removeToken: () => void;
    handleLogin: () => void;
};

const useAuth = (): AuthType => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setIsLogin(true);
    }, []);
    const removeToken = () => {
        localStorage.removeItem("token");
        setIsLogin(false);
    };
    const handleLogin = () => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };
    return { isLogin, removeToken, handleLogin };
};

export default useAuth;
