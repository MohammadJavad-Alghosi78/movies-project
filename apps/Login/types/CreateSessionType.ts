export type CreateNewSessionRequestType = {
    request_token: string;
};

export type CreateNewSessionResponseType = {
    success?: boolean;
    failure?: boolean;
    status_code?: number;
    status_message?: string;
};
