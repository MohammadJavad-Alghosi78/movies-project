// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MoviesType } from "apps/shared/types/MoviesType";
import { MovieDataType } from "apps/WatchList/types/WatchListTypes";
// helper
import handleUrl from "apps/WatchList/core/modules/requestUrl";
// constants
import { RequestMethods } from "apps/shared/core/constants";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWatchList: builder.query<MoviesType, void>({
      query: () => handleUrl(RequestMethods.GET),
      // Question:
      // Should not be set a providesTags? (we have a POST request here)
    }),
    addMovieToWatchList: builder.mutation<any, MovieDataType>({
      query: (movieData) => {
        const { media_type, media_id, watchlist }: MovieDataType = movieData;
        return {
          url: handleUrl(RequestMethods.POST),
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
        url: handleUrl(),
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
