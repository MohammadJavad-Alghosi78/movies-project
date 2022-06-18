import { MovieType } from "apps/Home/types/MovieType";

export type moviesType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
