export type CastAndCrewType = {
  adult: boolean;
  cast_id: number | string;
  character: string;
  credit_id: number | string;
  gender: number;
  id: number | string;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
};

export type CreditType = {
  id: number;
  cast: CastAndCrewType[];
  crew: CastAndCrewType[];
};
