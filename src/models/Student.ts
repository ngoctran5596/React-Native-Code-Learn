export interface Student {
    id?: string;
    name?: string;
    image?: string;
    email?: string;
    city?: string;
    gender?: 'male' | 'female';
    createdAt?: number;
    updatedAt?: number;
}