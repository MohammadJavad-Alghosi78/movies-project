import { apiSlice } from "../apiSlice";
import { moviesType } from "./types";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";

const handleUrl = (baseUrl: string) => `${baseUrl}?api_key=${API_KEY}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<moviesType, void>({
      query: () => handleUrl("/movie/popular"),
    }),
  }),
});

export const { useGetMoviesQuery } = extendedApiSlice;
