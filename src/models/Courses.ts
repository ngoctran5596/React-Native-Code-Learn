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
export interface Video {
    id?: string;
    title?: string;
    duration?: string;
    course_id?: string;
    size?: string;
    source?: string;
    progress?: string;
    is_playing?: [];
    is_complete?: [];
    is_lock?: [];
    is_downloaded?: [];
}