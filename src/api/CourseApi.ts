
import { ListResponse, Course, ListParams } from "@models";
// import { ListParams } from "@models/Common";

import axiosClient from "./api";



const CourseApi = {

    getAll(params: any): Promise<ListResponse<Course>> {
        const url = '/api/courses/learning';
        return axiosClient.get(url, { params });
    },

    getById(id: any): Promise<Course> {
        const url = `/students/${id}`;
        return axiosClient.get(url );
    },
    
    add(data: Course): Promise<Course> {
        const url = '/students';
        return axiosClient.post(url,  data );
    },

    update(data: Course): Promise<Course> {
        const url = '/students';
        return axiosClient.patch(url, data);
    },

    remove(id: ListParams): Promise<any> {
        const url = `/students/${id}`;
        return axiosClient.get(url);
    }
}

export default CourseApi;