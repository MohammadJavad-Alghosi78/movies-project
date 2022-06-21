// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MoviesType } from "apps/shared/types/MoviesType";
import { MovieType } from "apps/shared/types/MovieType";
import {
    AddToWatchlistResponseType,
    MovieDataType,
} from "apps/WatchList/types/WatchListTypes";
// helper
import handleUrl from "apps/WatchList/core/modules/requestUrl";
// constants
import { RequestMethods } from "apps/shared/core/constants";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWatchList: builder.query<MoviesType, void>({
            query: () => handleUrl(RequestMethods.GET),
            providesTags: [{ type: "Watchlist", id: "LIST" }],
        }),
        addMovieToWatchList: builder.mutation<
            AddToWatchlistResponseType,
            MovieDataType
        >({
            query: movieData => {
                const { media_type, media_id, watchlist }: MovieDataType =
                    movieData;
                return {
                    url: handleUrl(RequestMethods.POST),
                    method: RequestMethods.POST,
                    body: {
                        media_type,
                        media_id,
                        watchlist,
                    },
                };
            },
            invalidatesTags: [{ type: "Watchlist", id: "LIST" }],
        }),
        deleteMovieFromWatchList: builder.mutation<
            any,
            { movieId: string | number }
        >({
            query: ({ movieId }) => ({
                url: `/posts/${movieId}`,
                method: RequestMethods.DELETE,
            }),
            // Optimistic update cach not working!
            onQueryStarted({ movieId }, { dispatch, queryFulfilled }) {
                dispatch(
                    extendedApiSlice.util.updateQueryData(
                        "getWatchList",
                        undefined,
                        data => {
                            data.results = data?.results?.filter(
                                (movie: MovieType) => movie.id !== movieId
                            );
                        }
                    )
                );
                try {
                    queryFulfilled;
                } catch {
                    console.log("An Error Has Been Occured!");
                    // finalWatchlist.undo();
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
