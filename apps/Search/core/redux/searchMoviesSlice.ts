// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MoviesType } from "apps/shared/types/MoviesType";
// helper
import handleUrl from "apps/Search/core/modules/requestUrl";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMoviesBysearch: builder.query<MoviesType, string>({
      query: (title = "") => handleUrl("/search/movie", title),
    }),
  }),
});

export const { useGetMoviesBysearchQuery } = extendedApiSlice;
