import axios from "axios";
import { getFromLocalStorage } from "./services/localStorage";
import { LOGGED_IN_USER_INFO } from "./constants";

function authHeaders() {
  const userInfo = getFromLocalStorage(LOGGED_IN_USER_INFO);
  return {
    Authorization: `Bearer ${userInfo}`,
  };
}

function buildUrl(path) {
  if (process.env.NODE_ENV === "production") return `${process.env.REACT_APP_API_PROD_URL}${path}`;
  return `${process.env.REACT_APP_API_URL}${path}`;
}

class BaseApi {
  get(path) {
    return axios.get(buildUrl(path), { headers: authHeaders() });
  }

  post(path, data) {
    return axios.post(buildUrl(path), data, { headers: authHeaders() });
  }

  authenticate(path, data) {
    return axios.post(buildUrl(path), data);
  }
}

const baseApi = new BaseApi();

export default baseApi;
