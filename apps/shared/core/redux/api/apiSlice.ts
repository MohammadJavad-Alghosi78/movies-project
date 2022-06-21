/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
    tagTypes: [
        "Movies",
        "Movie",
        "SearchMovies",
        "Watchlist",
        "Credits",
        "Credit",
    ],
    // eslint-disable-next-line no-unused-vars
    endpoints: builder => ({}),
});
