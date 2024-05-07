import runtimeEnv from "@mars/heroku-js-runtime-env";
import axios from "axios";

function authHeaders() {
  return {
    auth: {
      username: "foo@test.com",
      password: "foobar",
    },
  };
}

function buildUrl(path) {
  const env = runtimeEnv();
  return `${env.REACT_APP_API_URL}${path}`;
}

class BaseApi {
  get(path) {
    return axios.get(buildUrl(path), authHeaders());
  }

  post(path, data) {
    return axios.post(buildUrl(), data, authHeaders());
  }
}

const baseApi = new BaseApi();

export default baseApi;
