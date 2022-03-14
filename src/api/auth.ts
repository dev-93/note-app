import { instance } from "./index";

export interface IUserData {
  username: string;
  password: string;
  nickname?: string;
}

function registerUser(userData: IUserData) {
  return instance.post("signup", userData);
}

function loginUser(userData: IUserData) {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
