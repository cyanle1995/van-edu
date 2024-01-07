import { get } from "./api_helper";
import * as url from "./url_helper";

export const getPatients = () => get(url.API_PATIENTS);
export const getDevices = () => get(url.API_GET_DEVICES);

export const postLogin = (payload) =>
  get(url.API_POST_LOGIN, {
    params: {
      userId: payload.userId,
    },
  });
