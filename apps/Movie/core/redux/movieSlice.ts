// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MovieType } from "apps/shared/types/SharedTypes";
import { CreditType } from "apps/Movie/types/MovieTypes";
// constants
import { ServiceName } from "@/apps/shared/core/constants";
// helper
import handleUrl from "apps/shared/core/modules/helper/requestUrl";

export const movieSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMovie: builder.query<MovieType, number>({
            query: (movieId: number) =>
                handleUrl(`movie/${movieId}`, ServiceName.PUBLIC),
        }),
        getCredits: builder.query<CreditType, number>({
            query: (movieId: number) =>
                handleUrl(`movie/${movieId}/credits`, ServiceName.PUBLIC),
        }),
    }),
});

export const { useGetMovieQuery, useGetCreditsQuery } = movieSlice;
