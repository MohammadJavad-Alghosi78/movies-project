export type LoginDataType = {
    username: string;
    password: string;
    request_token: string;
};

export type ValidateLoginResponseType = {
    expires_at: string;
    request_token: string;
    success: true;
};

export type GetTokenResponseType = {
    success: boolean;
    expires_at: string;
    request_token: string;
};

export type CreateNewSessionRequestType = {
    request_token: string;
};

export type CreateNewSessionResponseType = {
    success?: boolean;
    failure?: boolean;
    status_code?: number;
    status_message?: string;
    session_id?: string;
};
