/* eslint-disable no-shadow */
export const accountConstants = {
    apiKey: process.env.apiKey,
    accountId: process.env.accountId,
};

export enum RequestMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export enum Variant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    DANGER = "danger",
    WARNING = "warning",
}

export enum Place {
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right",
}

export const headerConstants = {
    placeholder: "Search by movie title",
};

export enum ServiceName {
    SEARCH = "SEARCH",
    WATCHLIST = "WATCHLIST",
    PUBLIC = "PUBLIC",
}
