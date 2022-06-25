// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { GetTokenResponseType } from "apps/Login/types/GetTokenType";
import {
    LoginDataType,
    validateLoginResponseType,
} from "apps/Login/types/LoginDataType";
// helper
import handleUrl from "apps/Login/core/modules/requestUrl";
import {
    CreateNewSessionRequestType,
    CreateNewSessionResponseType,
} from "apps/Login/types/CreateSessionType";

export const loginSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getToken: builder.query<GetTokenResponseType, void>({
            query: () => handleUrl("/authentication/token/new"),
        }),
        validateToken: builder.mutation<
            validateLoginResponseType,
            LoginDataType
        >({
            query: loginData => ({
                url: handleUrl("/authentication/token/validate_with_login"),
                method: "POST",
                body: {
                    username: loginData.username,
                    password: loginData.password,
                    request_token: loginData.request_token,
                },
            }),
        }),
        createNewSession: builder.mutation<
            CreateNewSessionResponseType,
            CreateNewSessionRequestType
        >({
            query: data => ({
                url: handleUrl("/authentication/session/new"),
                method: "POST",
                body: {
                    request_token: data.request_token,
                },
            }),
        }),
        removeSession: builder.mutation<{ success: boolean }, string>({
            query: sessionId => ({
                url: handleUrl("/authentication/session"),
                method: "DELETE",
                body: {
                    session_id: sessionId,
                },
            }),
        }),
    }),
});

export const {
    useGetTokenQuery,
    useValidateTokenMutation,
    useCreateNewSessionMutation,
    useRemoveSessionMutation,
} = loginSlice;
