
import { ListResponse, Course, ListParams } from "@models";
// import { ListParams } from "@models/Common";

import axiosClient from "./api";



const CourseApi = {

    getAll(): Promise<ListResponse<Course>> {
        const url = '/codez';

        return axiosClient.get(url, {});
    },

    getById(id: any): Promise<Course> {
        const url = `/students/${id}`;
        return axiosClient.get(url);
    },

    add(data: Course): Promise<Course> {
        const url = '/students';
        return axiosClient.post(url, data);
    },
    addstudent(id: any,token: string): Promise<any> {
        const url = `/codez/addstudent?id=${id}`;

        return axiosClient.post(url,{}, {
            headers: {
                'Authorization': token 
            }
          });
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