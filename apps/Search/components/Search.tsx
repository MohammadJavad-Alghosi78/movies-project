// node_modules
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// api
import { useGetMoviesBysearchQuery } from "apps/Search/core/redux/searchMoviesSlice";
// custom hooks
import useDebounce from "apps/shared/core/modules/hooks/useDebounce";
// components
import MovieCard from "apps/shared/components/MovieCard";
// types  Refactor: change directory of this type
import { MovieType } from "apps/shared/types/MovieType";
// styles
import classes from "apps/Search/styles/style.module.scss";

const SearchView = (): JSX.Element => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    useEffect(() => {
        if (router.query.searchTerm) {
            setSearchTerm(String(router.query.searchTerm));
        }
    }, [router.query.searchTerm]);

    const { data, isLoading, isFetching } = useGetMoviesBysearchQuery(debouncedSearchTerm, {
        skip: debouncedSearchTerm.length === 0,
    });

    if (isLoading) return <h1>Loading ...</h1>;
    else if (isFetching) return <h1>Fetching ...</h1>;
    if (data && data.results && !data.results.length) return <h1>No movie</h1>;
    if (data && data.results && data.results.length) {
        return (
            <div className={classes.movies_wrapper}>
                {data?.results?.map((movie: MovieType) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </div>
        );
    }
    return <h1>Loading ...</h1>;
};

export default SearchView;
