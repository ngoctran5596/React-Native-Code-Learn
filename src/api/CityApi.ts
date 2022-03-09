
import { ListResponse,City } from "@models";

import axiosClient from "./api";



const CityApi = {

    getAll():Promise<ListResponse<City>> {
        const url = '/city';
        return axiosClient.get(url,{
            params:{
                _page:2
            }
        });
    }
}

export default CityApi;