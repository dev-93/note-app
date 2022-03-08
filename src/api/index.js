import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
  return instance.post("signup", userData);
}

function loginUser(userData) {
  return instance.post("login", userData);
}

function fetchPosts() {
  return instance.get("posts");
}

function createPost(postData) {
  return instance.post("posts", postData);
}

export { registerUser, loginUser, fetchPosts, createPost };
