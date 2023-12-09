import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "./api";
const requestAPI = <T = any, R = AxiosResponse<T>>(
  config: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.request(config);
};
const getAPI = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.get<T, R>(url, { params: data, ...config });
};

const postAPI = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.post<T, R>(url, data, config);
};

const putAPI = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.put<T, R>(url, data, config);
};

const deleteAPI = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance.delete<T, R>(url, config);
};

export { getAPI, postAPI, putAPI, deleteAPI, requestAPI };
