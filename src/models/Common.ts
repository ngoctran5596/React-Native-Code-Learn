export interface PaginationPrams{
    _limit: number;
    _page: number;
    _total: number;
}

export interface ListResponse<T>{
    data:T[];
    pagination:PaginationPrams
}
export interface LoginResponse{
    [key:string]: any;
    pagination:PaginationPrams;
}

export interface ListParams {
    _limit: number;
    _page: number;
    _sort: string;
    _order: 'asc' |'desc';

    [key:string]: any;
}
