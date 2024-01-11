import axios from "axios";

//apply base url for axios
const REACT_APP_APP_URL = "https://van.akaky.xyz/api/";
let axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axiosApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("TOKEN");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}
