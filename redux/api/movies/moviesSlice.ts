import { apiSlice } from "../apiSlice";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";

const handleUrl = (baseUrl: string) => `${baseUrl}?api_key=${API_KEY}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // builder.query types
    getMovies: builder.query<unknown, void>({
      query: () => handleUrl("/movie/popular"),
    }),
  }),
});

export const { useGetMoviesQuery } = extendedApiSlice;
