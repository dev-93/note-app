import axios, { AxiosInstance } from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url: string) {
  const instance: AxiosInstance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });

  return setInterceptors(instance);
}

const instance = createInstance();
const posts = createInstanceWithAuth("posts");

export { instance, posts };
