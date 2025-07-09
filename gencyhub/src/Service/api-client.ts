import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

class Apiclient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?:AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default Apiclient;
