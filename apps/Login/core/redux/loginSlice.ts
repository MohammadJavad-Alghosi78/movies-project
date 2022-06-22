// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { GetTokenResponseType } from "apps/Login/types/GetTokenType";
// helper
import handleUrl from "apps/Login/core/modules/requestUrl";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getToken: builder.query<GetTokenResponseType, void>({
            query: () => handleUrl("/authentication/token/new"),
        }),
    }),
});

export const { useGetTokenQuery } = extendedApiSlice;
