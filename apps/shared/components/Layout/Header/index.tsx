// node_modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Components
import TextField from "../../TextFiled";
import Button from "../../Button";
// Hooks
import useAuth from "@/apps/shared/core/modules/hooks/useAuth";
// Hooks
import { useDispatch } from "react-redux";
// Types
// import { HeaderType } from "./types";
// Actions
import { changeSearchTerm } from "@/redux/search/searchSlice";
// Styles
import classes from "./style.module.scss";
// Constants
import headerConstants from "./constants";

const Header = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
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

  // Remove re-rendering and send two requests ***
  // Set default url when refreshing ***
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchTerm = e.currentTarget.value;
    setMovie(searchTerm);
    // Remove from redux and add to query string in url ***
    dispatch(changeSearchTerm(e.currentTarget.value));
    console.log("Header: ", searchTerm);
    if (searchTerm) router.push(`/search/${searchTerm}`);
    else router.push("/");
  };

  useEffect(() => {
    dispatch(changeSearchTerm(movie));
  }, [movie]);

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
          handleChange={handleChange}
          onClick={() => router.push(`/search/?/`)}
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
