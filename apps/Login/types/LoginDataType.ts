export type LoginDataType = {
    username: string;
    password: string;
    request_token: string;
};

export type validateLoginResponseType = {
    success: boolean;
    status_code: number;
    status_message: string;
};
