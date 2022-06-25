// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { ServiceName } from "apps/shared/core/constants";
// constants
import { MoviesType } from "apps/shared/types/SharedTypes";
// helper
import handleUrl from "apps/shared/core/modules/helper/requestUrl";

export const moviesSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMovies: builder.query<MoviesType, void>({
            query: () => handleUrl("/movie/popular", ServiceName.PUBLIC),
        }),
    }),
});

export const { useGetMoviesQuery } = moviesSlice;
