export interface Course {
    id?: string;
    videos?: any[];
    students?: any[];
    instructor?: Object;
    title?: string;
    duration?: string;
    ratings?: string;
    price?: string;
    is_favorite?: boolean;
    createdAt?: number;
    updatedAt?: number;
}