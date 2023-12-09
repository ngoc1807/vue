import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as qs from "qs";
export enum StatusCode {
  Successfully = 200,
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean | number>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
  "X-RapidAPI-Key": "fcc8ac498amshe52a968db3d7089p1f084ejsn5fbc4ea324a1",
  "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
};

const configOption: AxiosRequestConfig = {
  timeout: 6000,
  headers,
  paramsSerializer(params) {
    return qs.stringify(params, { format: "RFC1738" });
  },
};

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token != null && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

const handleError = (error: any) => {
  const { status } = error;

  switch (status) {
    case StatusCode.InternalServerError: {
      // Handle InternalServerError
      break;
    }
    case StatusCode.Forbidden: {
      // Handle Forbidden
      break;
    }
    case StatusCode.Unauthorized: {
      // Handle Unauthorized
      break;
    }
    case StatusCode.TooManyRequests: {
      // Handle TooManyRequests
      break;
    }
  }

  return Promise.reject(error);
};

const axiosInstance = axios.create(configOption);

// Add a request interceptor
axiosInstance.interceptors.request.use(injectToken, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    return handleError(response);
  }
);

export default axiosInstance;
