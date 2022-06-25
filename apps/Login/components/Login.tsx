import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// components
import TextField from "apps/shared/components/TextFiled";
import Button from "apps/shared/components/Button";
// api
import {
    useGetTokenQuery,
    useValidateTokenMutation,
    useCreateNewSessionMutation,
} from "apps/Login/core/redux/loginSlice";
// styles
import classes from "apps/Login/styles/style.module.scss";

function LoginView() {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);
    // Getting token request
    const { data: tokenData, isError } = useGetTokenQuery(null, {
        skip: !isValid,
    });
    // Token validation with login(username and password)
    const [validateToken, validationTokenResults] = useValidateTokenMutation();

    // Creating session id
    const [createNewSessionId, creatingNewSessionIdResults] =
        useCreateNewSessionMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsValid(true);
    };

    useEffect(() => {
        if (isValid && tokenData) {
            const { request_token } = tokenData;
            validateToken({ username, password, request_token });
        }
    }, [isValid, password, tokenData, username, validateToken]);

    useEffect(() => {
        if (validationTokenResults?.data) {
            const { request_token } = validationTokenResults.data;
            createNewSessionId({ request_token });
        }
    }, [createNewSessionId, validationTokenResults]);

    useEffect(() => {
        if (creatingNewSessionIdResults?.data) {
            sessionStorage.setItem(
                "token",
                creatingNewSessionIdResults?.data?.session_id
            );
            router.replace("/");
        }
    }, [creatingNewSessionIdResults, router]);

    return (
        <>
            <div className={classes.login_wrapper}>
                <form onSubmit={handleSubmit}>
                    <h3 className={classes.form_title}>Login</h3>
                    <div className={classes.form_item}>
                        <label htmlFor="username" className={classes.label}>
                            Username:
                        </label>
                        <TextField
                            id="username"
                            value={username}
                            placeholder="username: "
                            handleChange={(
                                e: React.FormEvent<HTMLInputElement>
                            ) => setUsername(e.currentTarget.value)}
                            type="text"
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
                            handleChange={(
                                e: React.FormEvent<HTMLInputElement>
                            ) => setPassword(e.currentTarget.value)}
                            type="password"
                            hasBorder
                        />
                    </div>
                    <Button
                        variant="danger"
                        type="submit"
                        styles={{ width: "100%" }}
                    >
                        submit
                    </Button>
                </form>
            </div>
            {(isError ||
                validationTokenResults.isError ||
                creatingNewSessionIdResults.isError) && (
                <h1 className={classes.login_error}>Login failed</h1>
            )}
        </>
    );
}

export default LoginView;
