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

export const extendedApiSlice = apiSlice.injectEndpoints({
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
    }),
});

export const { useGetTokenQuery } = extendedApiSlice;
