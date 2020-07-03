import http from "./httpService";
import { apiUrl } from "../config.json";
import { isError } from "lodash";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
