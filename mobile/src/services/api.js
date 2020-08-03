import axios from "axios";
import { getToken } from '../utils/index';

const api = axios.create({
  baseURL: "http://192.168.1.17:8080/"
});

api.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const register = {
  insert: data => api.post('user/establishment/register', data),
  validEmail: email => api.get(`user/email/${email}`),
  validCode: data => api.put('user/establishment/authorization', data),
  selectTypePlace: () => api.get("/type/place"),
}

export const auth = {
  login: data => api.post("auth/authenticate", data),
};

export const establishment = {
  select: idUser => api.get(`establishment/user/${idUser}`),
  insert: data => api.post(`establishment/register`, data),
}

export const branch = {
  select: idEstablishment => api.get(`branch/establishment/${idEstablishment}`),
  insert: data => api.post(`branch/register`, data),
}

export const address = {
  selectLocationByAddress: (address) =>
    api.get(`maps/search/address?address=${address}`),
};


export default api;