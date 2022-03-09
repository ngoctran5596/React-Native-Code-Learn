
import { ListResponse, City, User } from "@models";
import { RegisterPayload } from "@store/auth/authClient";


import axiosClient from "./api";



const RegisterApi = {

    register(data:RegisterPayload ):Promise<User> {
        const url = '/register';
        console.log('/register')
        return axiosClient.post(url,
            data);
    }
}

export default RegisterApi;