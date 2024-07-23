import axios from "axios";
import {authentication, createDirectus, rest} from '@directus/sdk'

//apply base url for axios
const REACT_APP_APP_URL = "https://van.akaky.xyz/api/";
const baseDirectUsURL = 'https://van.akaky.xyz';
let axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axiosApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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
export async function post(url, config) {
  return await axiosApi
    .post(url, {
      ...config,
    })
    .then((response) => response.data);
}
export const DirectUsClient = createDirectus(baseDirectUsURL)
  .with(authentication())
  .with(rest())