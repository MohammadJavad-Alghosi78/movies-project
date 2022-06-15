import { apiSlice } from "../apiSlice";
import {
  MovieDataType,
  MovieToWatchListResponseType,
  MovieToWatchListType,
} from "./types";

const API_KEY = "bd4c2b8adb9ff5e8d24fe3fef07813c8";
const sessionId = "";

const handleWatchListUrl = (account_id: number) =>
  `/account/${account_id}/watchlist/movies?api_key=${API_KEY}&session_id=${"test"}`;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWatchList: builder.query<any, any>({
      // Review for type and parameters
      query: () => handleWatchListUrl(1),
    }),
    addMovieToWatchList: builder.mutation<
      MovieToWatchListResponseType,
      MovieToWatchListType
    >({
      query: ({ account_id, movieData }) => {
        const { media_type, media_id, watchlist }: MovieDataType = movieData;
        return {
          url: `/account/${account_id}/watchlist?api_key=${API_KEY}`,
          method: "POST",
          body: {
            media_type,
            media_id,
            watchlist,
          },
        };
      },
    }),
    deleteMovieFromWatchList: builder.mutation<any, any>({
      query: () => "/no-thing",
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          extendedApiSlice.util.updateQueryData("getWatchList", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetWatchListQuery } = extendedApiSlice;
