import store from "@/store/index";
import { AxiosInstance, AxiosRequestConfig } from "axios";

export function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config: any) {
      config.headers.Authorization = store.state.token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
  return instance;
}
