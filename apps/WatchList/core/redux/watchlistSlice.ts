/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
// main slice
import { apiSlice } from "apps/shared/core/redux/api/apiSlice";
// types
import { MoviesType, MovieType } from "apps/shared/types/SharedTypes";
import {
    AddToWatchlistResponseType,
    MovieDataType,
} from "apps/WatchList/types/WatchListTypes";
// helper
import handleUrl from "apps/shared/core/modules/helper/requestUrl";
// constants
import { RequestMethods, ServiceName } from "apps/shared/core/constants";

export const watchlistSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWatchList: builder.query<MoviesType, void>({
            query: () =>
                handleUrl("", ServiceName.WATCHLIST, "", RequestMethods.GET),
        }),
        addMovieToWatchList: builder.mutation<
            AddToWatchlistResponseType,
            MovieDataType
        >({
            query: movieData => {
                const { media_type, media_id, watchlist }: MovieDataType =
                    movieData;
                return {
                    url: handleUrl(
                        "",
                        ServiceName.WATCHLIST,
                        "",
                        RequestMethods.POST
                    ),
                    method: RequestMethods.POST,
                    body: {
                        media_type,
                        media_id,
                        watchlist,
                    },
                };
            },
            onQueryStarted(
                { title, overview, media_id },
                { dispatch, queryFulfilled }
            ) {
                dispatch(
                    watchlistSlice.util.updateQueryData(
                        "getWatchList",
                        undefined,
                        data => {
                            data.results.push({
                                original_title: title,
                                overview,
                                id: Number(media_id),
                            });
                        }
                    )
                );
                queryFulfilled;
            },
        }),
        deleteMovieFromWatchList: builder.mutation<
            any,
            { movieId: string | number }
        >({
            query: ({ movieId }) => ({
                url: `/posts/${movieId}`,
                method: RequestMethods.DELETE,
            }),
            onQueryStarted({ movieId }, { dispatch, queryFulfilled }) {
                dispatch(
                    watchlistSlice.util.updateQueryData(
                        "getWatchList",
                        undefined,
                        data => {
                            data.results = data?.results?.filter(
                                (movie: MovieType) => movie.id !== movieId
                            );
                        }
                    )
                );
                queryFulfilled;
            },
        }),
    }),
});

export const {
    useGetWatchListQuery,
    useAddMovieToWatchListMutation,
    useDeleteMovieFromWatchListMutation,
} = watchlistSlice;
