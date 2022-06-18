import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
import { MovieType } from "apps/Home/types/MovieType";
import { MoviesType } from "apps/Home/types/MoviesType";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";

const handleUrl = (baseUrl: string) => `${baseUrl}?api_key=${API_KEY}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesType, void>({
      query: () => handleUrl("/movie/popular"),
      // Remove all provides tags from all project ******
      providesTags: (response) =>
        response
          ? [
              ...response?.results.map((movie: MovieType) => {
                return {
                  type: "Movie" as const,
                  id: movie.id,
                };
              }),
              { type: "Movies", id: "LIST" },
            ]
          : [{ type: "Movies", id: "LIST" }],
    }),
    // Capital word : all types ***
    getMovie: builder.query<MovieType, number>({
      query: (movieId: number) => handleUrl(`movie/${movieId}`),
      // What is right type of response?
      transformResponse: (response: any) => ({
        id: response?.data.id,
        title: response?.data.original_title,
        overview: response?.data.overview,
        genres: response?.data.genres,
        voteAverage: response?.data.vote_average,
      }),
    }),
    getCredits: builder.query<any, number>({
      query: (movieId: number) => handleUrl(`movie/${movieId}/credits`),
    }),
    getCredit: builder.query<any, any>({
      query: (creditId: string) => handleUrl(`/credit/${creditId}`),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetCreditsQuery,
  useGetCreditQuery,
} = extendedApiSlice;
