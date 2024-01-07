import axios from "axios";

//apply base url for axios
// const REACT_APP_APP_URL = "https://mock.apidog.com/m1/412751-0-default/api/";
const REACT_APP_APP_URL = "https://5e8f501dfe7f2a00165ef1cc.mockapi.io/cyan/";
let axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axiosApi.interceptors.request.use(function (config) {
  const userInfoString = localStorage.getItem("USER_INFO");
  if (userInfoString) {
    const userInfo = JSON.parse(userInfoString);
    config.headers.Authorization = userInfo.accessToken;
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
