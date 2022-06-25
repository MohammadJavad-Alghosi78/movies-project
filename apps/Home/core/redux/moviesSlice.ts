// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MoviesType } from "apps/shared/types/SharedTypes";
// helper
import handleUrl from "apps/Movie/core/modules/requestUrl";

export const moviesSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMovies: builder.query<MoviesType, void>({
            query: () => handleUrl("/movie/popular"),
        }),
    }),
});

export const { useGetMoviesQuery } = moviesSlice;
