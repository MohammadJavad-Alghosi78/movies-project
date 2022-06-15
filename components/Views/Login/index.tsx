// node_modules
import React, { useState } from "react";
// Components
import TextField from "@/components/shared/TextFiled";
// Styles
import classes from "./styles.module.scss";
import Button from "@/components/shared/Button";

const LoginView = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submited");
  };
  return (
    <div className={classes.login_wrapper}>
      <form onSubmit={handleSubmit}>
        <h3 className={classes.form_title}>Login</h3>
        <div className={classes.form_item}>
          <label htmlFor="email" className={classes.label}>
            Email:
          </label>
          <TextField
            id="email"
            value={email}
            placeholder="email: "
            handleChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            type="email"
            hasBorder
          />
        </div>
        <div className={classes.form_item}>
          <label htmlFor="password" className={classes.label}>
            Password:
          </label>
          <TextField
            id="password"
            value={password}
            placeholder="password: "
            handleChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            type="password"
            hasBorder
          />
        </div>
        <Button variant="danger" type="submit" styles={{ width: "100%" }}>
          submit
        </Button>
      </form>
    </div>
  );
};

export default LoginView;
