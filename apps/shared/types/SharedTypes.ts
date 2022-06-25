import React, { ReactNode } from "react";

type TButtonVariant = "primary" | "danger";
type TButtonType = "button" | "submit";

export type ButtonPropsType = {
    children: React.ReactElement | React.ReactNode;
    variant?: TButtonVariant;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: TButtonType;
    styles?: object;
};

export type PlaceType =
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right";

export type RateType = {
    rate: number;
    place: PlaceType;
};

export type MovieType = {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    originalTitle?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    media_id?: string;
    vote_count?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    genres?: { id: number; name: string }[] | any;
    movieId?: number | string;
};

export type MoviesType = {
    page?: number;
    results?: MovieType[];
    total_pages?: number;
    total_results?: number;
};

export type BoxType = {
    children: ReactNode;
};

export type TextFieldPropsTypes = {
    value: string;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    placeholder: string;
    id?: string;
    type?: string;
    hasBorder?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: any;
};
