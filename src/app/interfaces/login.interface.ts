export interface Login{
    username: string;
    password: string;
    domain: string;
    fullName?: string;
    message?: string;
    result?: boolean;
    token?: string;
}