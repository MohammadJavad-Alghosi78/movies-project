// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MoviesType } from "apps/shared/types/SharedTypes";
// constants
import { ServiceName } from "apps/shared/core/constants";
// helper
import handleUrl from "apps/shared/core/modules/helper/requestUrl";

export const searchSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMoviesBysearch: builder.query<MoviesType, string>({
            query: (title = "") =>
                handleUrl("/search/movie", ServiceName.SEARCH, title),
        }),
    }),
});

export const { useGetMoviesBysearchQuery } = searchSlice;
