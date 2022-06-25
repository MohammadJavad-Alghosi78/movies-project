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
