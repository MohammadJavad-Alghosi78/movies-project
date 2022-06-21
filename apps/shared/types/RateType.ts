export type PlaceType =
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right";

export type RateType = {
    rate: number;
    place: PlaceType;
};
