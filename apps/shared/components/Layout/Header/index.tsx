// node_modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// components
// hooks
import useAuth from "apps/shared/core/modules/hooks/useAuth";
// Constants
import { headerConstants } from "apps/shared/core/constants";
// styles
import classes from "apps/shared/styles/layout/header/style.module.scss";
import Button from "../../Button";
import TextField from "../../TextFiled";

function Header(): JSX.Element {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const { removeToken } = useAuth();
    const [movie, setMovie] = useState<string>("");

    const handleClick = () => {
        if (isLogin) {
            removeToken();
            setIsLogin(false);
        } else {
            router.push("/login");
        }
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const searchTerm = e.currentTarget.value;
        setMovie(searchTerm);
        router.push(`/search/${e.currentTarget.value}`);
        if (searchTerm.length > 0)
            router.push(`/search/${searchTerm}`, undefined, { shallow: true });
        else router.push("/");
    };

    useEffect(() => {
        if (router.query.searchTerm) {
            setMovie(String(router.query.searchTerm));
        }
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [router]);

    // JSX
    return (
        <div className={classes.header_wrapper}>
            <div className={classes.left_section}>
                <Link href="/" passHref>
                    <h3 className={classes.home_link}>Home</h3>
                </Link>
                <TextField
                    value={movie}
                    placeholder={headerConstants.placeholder}
                    handleChange={handleChange}
                    onClick={() => router.push("/search/?/")}
                />
            </div>
            <div className={classes.right_section}>
                {isLogin && (
                    <Link href="/watchlist">
                        <a className={classes.watchlist_text}>Watchlist</a>
                    </Link>
                )}
                <Button onClick={handleClick}>
                    {isLogin ? "Logout" : "Login"}
                </Button>
            </div>
        </div>
    );
}

export default Header;
