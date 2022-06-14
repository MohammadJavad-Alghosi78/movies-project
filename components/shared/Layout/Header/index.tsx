// node_modules
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Components
import TextField from "../../TextFiled";
import Button from "../../Button";
// Types
import { HeaderType } from "./types";
// Styles
import classes from "./style.module.scss";
// Constants
import headerConstants from "./constants";

const Header = ({ isLogin = false }: HeaderType): JSX.Element => {
  const [movie, setMovie] = useState("");
  const router = useRouter();

  const handleClick = () => {
    isLogin ? console.log("You are logout") : router.push("/login");
  };

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
        <Link href="/watchlist">
          <a className={classes.watchlist_text}>Watchlist</a>
        </Link>
        <Button onClick={handleClick}>{isLogin ? "Logout" : "Login"}</Button>
      </div>
    </div>
  );
};

export default Header;
