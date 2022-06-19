// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// type
import { ActorType } from "apps/Actor/types/actorType";
// helper
import handleUrl from "apps/Actor/core/modules/requestUrl";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCredit: builder.query<ActorType, string>({
      query: (creditId: string) => handleUrl(`/credit/${creditId}`),
    }),
  }),
});

export const { useGetCreditQuery } = extendedApiSlice;
