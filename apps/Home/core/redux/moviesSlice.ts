// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MoviesType } from "apps/shared/types/MoviesType";
// helper
import handleUrl from "apps/Movie/core/modules/requestUrl";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesType, void>({
      query: () => handleUrl("/movie/popular"),
    }),
  }),
});

export const { useGetMoviesQuery } = extendedApiSlice;
