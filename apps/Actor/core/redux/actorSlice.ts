// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// type
import { ActorType } from "apps/Actor/types/ActorType";
// constants
import { ServiceName } from "apps/shared/core/constants";
// helper
import handleUrl from "apps/shared/core/modules/helper/requestUrl";

export const actorSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCredit: builder.query<ActorType, string>({
            query: (creditId: string) =>
                handleUrl(`/credit/${creditId}`, ServiceName.PUBLIC),
        }),
    }),
});

export const { useGetCreditQuery } = actorSlice;
