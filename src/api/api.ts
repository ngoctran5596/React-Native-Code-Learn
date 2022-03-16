import axios, { AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from 'axios';


const axiosClient = axios.create({
  baseURL: 'http://192.168.1.4:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  console.log('error',error)
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  response => response.data,
  ({ message, response }) => {
    if (response?.data) {
      return Promise.reject({
        message: response.data.error || response.data.message || message,
        code: response.data.code ?? -1,
      });
    }
    return Promise.reject({ message, code: response?.status ?? -1 });
  }
);





export default axiosClient;
