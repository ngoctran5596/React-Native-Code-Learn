export interface User{
    id?: string |number;
    email: string;
    password: string;
    name?: string;
    image?: string;
    accessToken: string;
    [key:string]: any;
}