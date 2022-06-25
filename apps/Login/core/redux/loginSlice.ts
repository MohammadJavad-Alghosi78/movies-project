// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import {
    GetTokenResponseType,
    LoginDataType,
    ValidateLoginResponseType,
    CreateNewSessionRequestType,
    CreateNewSessionResponseType,
} from "apps/Login/types/LoginTypes";
// constants
import { ServiceName } from "apps/shared/core/constants";
// helper
import handleUrl from "apps/shared/core/modules/helper/requestUrl";

export const loginSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getToken: builder.query<GetTokenResponseType, void>({
            query: () =>
                handleUrl("/authentication/token/new", ServiceName.PUBLIC),
        }),
        validateToken: builder.mutation<
            ValidateLoginResponseType,
            LoginDataType
        >({
            query: loginData => ({
                url: handleUrl(
                    "/authentication/token/validate_with_login",
                    ServiceName.PUBLIC
                ),
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
                url: handleUrl(
                    "/authentication/session/new",
                    ServiceName.PUBLIC
                ),
                method: "POST",
                body: {
                    request_token: data.request_token,
                },
            }),
        }),
        removeSession: builder.mutation<{ success: boolean }, string>({
            query: sessionId => ({
                url: handleUrl("/authentication/session", ServiceName.PUBLIC),
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
