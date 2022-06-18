import { apiSlice } from "../../../shared/core/redux/api/apiSlice";
import {
  MovieDataType,
  MovieToWatchListResponseType,
  MovieToWatchListType,
} from "../../../../redux/api/watchlist/types";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";

const handleWatchListUrl = () =>
  `/account/${process.env.ACCOUNT_ID}/watchlist/movies?api_key=${API_KEY}&session_id=${process.env.SESSION_ID}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWatchList: builder.query<any, void>({
      // Review for type and parameters
      query: () => handleWatchListUrl(),
      // providesTags: [{ type: "Watchlist", id: "LIST" }],
      providesTags: (response) => {
        const data = response
          ? [
              ...response.results.map((movies: any) => {
                return {
                  type: "Watchlist" as const,
                  id: movies.id,
                };
              }),
            ]
          : [{ type: "Watchlist", id: "LIST" }];
        return data;
      },
    }),
    addMovieToWatchList: builder.mutation<any, any>({
      query: (movieData) => {
        const { media_type, media_id, watchlist }: MovieDataType = movieData;
        return {
          url: `/account/${process.env.ACCOUNT_ID}/watchlist?api_key=${API_KEY}&session_id=${process.env.SESSION_ID}`,
          method: "POST",
          body: {
            media_type,
            media_id,
            watchlist,
          },
        };
      },
      // Remove this invalidate
      invalidatesTags: [{ type: "Watchlist", id: "LIST" }],
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
      // Optimistic cach not working!
      onQueryStarted({ movieId }, { dispatch, queryFulfilled }) {
        const result = dispatch(
          extendedApiSlice.util.updateQueryData(
            "getWatchList",
            undefined,
            (data) => {
              // Returns Proxy object!
              console.log("test", movieId, data.results[0].id);
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
