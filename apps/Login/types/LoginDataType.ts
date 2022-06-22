export type LoginDataType = {
    username: string;
    password: string;
    request_token: string;
};

export type validateLoginResponseType = {
    expires_at: string;
    request_token: string;
    success: true;
};
