// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MovieType } from "apps/shared/types/SharedTypes";
import { CreditType } from "apps/Movie/types/MovieTypes";
// helper
import handleUrl from "apps/Movie/core/modules/requestUrl";

export const movieSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMovie: builder.query<MovieType, number>({
            query: (movieId: number) => handleUrl(`movie/${movieId}`),
        }),
        getCredits: builder.query<CreditType, number>({
            query: (movieId: number) => handleUrl(`movie/${movieId}/credits`),
        }),
    }),
});

export const { useGetMovieQuery, useGetCreditsQuery } = movieSlice;
