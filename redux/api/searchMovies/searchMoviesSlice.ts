import { apiSlice } from "../apiSlice";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";

const handleUrl = (baseUrl: string, title: string): string =>
  `${baseUrl}?api_key=${API_KEY}&query=${title}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMoviesBysearch: builder.query<any, string>({
      query: (title) => handleUrl("/search/movie", title),
    }),
  }),
});

export const { useGetMoviesBysearchQuery } = extendedApiSlice;
