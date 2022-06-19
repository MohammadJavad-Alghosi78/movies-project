export type MediaType = {
  adult: false;
  backdrop_path: string;
  character: string;
  genre_ids: number[];
  id: number | string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type KnownForType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number | string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type PersonType = {
  adult: boolean;
  gender: number;
  id: number | string;
  known_for: KnownForType[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
};

export type ActorType = {
  credit_type: string;
  department: string;
  id: string | number;
  job: string;
  media: MediaType;
  media_type: string;
  person: PersonType;
};
