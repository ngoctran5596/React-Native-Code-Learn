export interface User{
    id?: string |number;
    email: string;
    password: string;
    name?: string;
    image?: string;
    [key:string]: any;
}