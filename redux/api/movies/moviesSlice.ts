import { apiSlice } from "../apiSlice";
import { moviesType, movieType } from "./types";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";

const handleUrl = (baseUrl: string) => `${baseUrl}?api_key=${API_KEY}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<moviesType, void>({
      query: () => handleUrl("/movie/popular"),
      // Why TypeScript Error
      providesTags: (response) => {
        const data = response
          ? [
              ...response?.results.map((movie) => {
                console.log(movie);
                return {
                  type: "Movies" as const,
                  id: movie.id,
                };
              }),
              "Movies",
            ]
          : [{ type: "Movies", id: "LIST" }];
        return data;
      },
    }),
    getMovie: builder.query<movieType, number>({
      query: (movieId: number) => handleUrl(`movie/${movieId}`),
      // What is right type of response?
      // transformResponse: (response: any) => ({
      //   id: response?.data.id,
      //   title: response?.data.original_title,
      //   overview: response?.data.overview,
      //   genres: response?.data.genres,
      //   voteAverage: response?.data.vote_average,
      // }),
      providesTags: ["Movie"],
    }),
    getCredits: builder.query<any, number>({
      query: (movieId: number) => handleUrl(`movie/${movieId}/credits`),
      providesTags: ["Credits"],
    }),
    getCredit: builder.query<any, any>({
      query: (creditId: string) => handleUrl(`/credit/${creditId}`),
      providesTags: ["Credit"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetCreditsQuery,
  useGetCreditQuery,
} = extendedApiSlice;
