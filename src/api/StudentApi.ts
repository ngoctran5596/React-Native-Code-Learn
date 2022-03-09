
import { ListResponse, Student, ListParams } from "@models";
// import { ListParams } from "@models/Common";

import axiosClient from "./api";



const StudentApi = {

    getAll(params: ListParams): Promise<ListResponse<Student>> {
        const url = '/students';
        return axiosClient.get(url, { params });
    },

    getById(id: any): Promise<Student> {
        const url = `/students/${id}`;
        return axiosClient.get(url );
    },
    
    add(data: Student): Promise<Student> {
        const url = '/students';
        return axiosClient.post(url,  data );
    },

    update(data: Student): Promise<Student> {
        const url = '/students';
        return axiosClient.patch(url, data);
    },

    remove(id: ListParams): Promise<any> {
        const url = `/students/${id}`;
        return axiosClient.get(url);
    }
}

export default StudentApi;