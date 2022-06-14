// node_modules
import React, { useState } from "react";
import Link from "next/link";
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
  // States
  const [movie, setMovie] = useState("");
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
        <Link href="/">
          <a className={classes.watchlist_text}>Watchlist</a>
        </Link>
        <Button onClick={() => console.log("")}>
          {isLogin ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
