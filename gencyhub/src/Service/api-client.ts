import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

class Apiclient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };

  get = (id?: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + `/${id}`)
      .then((res) => res.data);
  };

  login = (username: string, password: string) => {
    return axiosInstance
      .post<T>("/auth/login", { username, password })
      .then((res) => res.data);
  };
}

export default Apiclient;
