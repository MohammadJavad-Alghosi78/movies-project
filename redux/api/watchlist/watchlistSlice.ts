import { apiSlice } from "../apiSlice";
import {
  MovieDataType,
  MovieToWatchListResponseType,
  MovieToWatchListType,
} from "./types";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";

const handleWatchListUrl = () =>
  `/account/${process.env.ACCOUNT_ID}/watchlist/movies?api_key=${API_KEY}&session_id=${process.env.SESSION_ID}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWatchList: builder.query<any, void>({
      // Review for type and parameters
      query: () => handleWatchListUrl(),
    }),
    addMovieToWatchList: builder.mutation<
      MovieToWatchListResponseType,
      MovieDataType
    >({
      query: (movieData) => {
        const { media_type, media_id, watchlist }: MovieDataType = movieData;
        return {
          url: `/account/${process.env.ACCOUNT_ID}/watchlist?api_key=${API_KEY}`,
          method: "POST",
          body: {
            media_type,
            media_id,
            watchlist,
          },
        };
      },
    }),
    deleteMovieFromWatchList: builder.mutation<
      any,
      { movieId: string | number }
    >({
      query: () => ({
        url: `/account/${process.env.ACCOUNT_ID}/watchlist/movies?api_key=${API_KEY}&session_id=${process.env.SESSION_ID}`,
        method: "DELETE",
        body: {},
      }),
      onQueryStarted({ movieId }, { dispatch, queryFulfilled }) {
        const result = dispatch(
          extendedApiSlice.util.updateQueryData(
            "getWatchList",
            undefined,
            (data) => {
              console.log("test", movieId, data);
            }
          )
        );
        try {
          queryFulfilled;
        } catch {
          console.log("An Error Has Been Occured!");
          // patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetWatchListQuery,
  useAddMovieToWatchListMutation,
  useDeleteMovieFromWatchListMutation,
} = extendedApiSlice;
