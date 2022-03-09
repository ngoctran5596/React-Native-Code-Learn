
import { ListResponse, City, User } from "@models";
import { LoginPayload } from "@store/auth/authClient";

import axiosClient from "./api";



const LoginApi = {

    login(data:LoginPayload ):Promise<User> {
        const url = '/login';
        return axiosClient.post(url,
            data)
    }
}

export default LoginApi;