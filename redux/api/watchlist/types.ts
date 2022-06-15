export type MovieDataType = {
  media_type: string;
  media_id: string;
  watchlist: boolean;
};

export type MovieToWatchListType = {
  account_id: number;
  movieData: MovieDataType;
};

export type MovieToWatchListResponseType = {
  status_code: number;
  status_message: string;
};
