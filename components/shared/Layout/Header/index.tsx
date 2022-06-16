// node_modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Components
import TextField from "../../TextFiled";
import Button from "../../Button";
// Hooks
import useAuth from "@/hooks/useAuth";
// Types
import { HeaderType } from "./types";
// Styles
import classes from "./style.module.scss";
// Constants
import headerConstants from "./constants";

const Header = (): JSX.Element => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { removeToken } = useAuth();
  const [movie, setMovie] = useState("");

  const handleClick = () => {
    if (isLogin) {
      removeToken();
      setIsLogin(false);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  // JSX
  return (
    <div className={classes.header_wrapper}>
      <div>
        <TextField
          value={movie}
          placeholder={headerConstants.placeholder}
          handleChange={(e: React.FormEvent<HTMLInputElement>) =>
            setMovie(e.currentTarget.value)
          }
        />
      </div>
      <div className={classes.right_section}>
        {isLogin && (
          <Link href="/watchlist">
            <a className={classes.watchlist_text}>Watchlist</a>
          </Link>
        )}
        <Button onClick={handleClick}>{isLogin ? "Logout" : "Login"}</Button>
      </div>
    </div>
  );
};

export default Header;
