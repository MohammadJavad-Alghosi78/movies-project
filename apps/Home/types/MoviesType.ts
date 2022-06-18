import { MovieType } from "apps/Home/types/MovieType";

export type MoviesType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
