import axios from "axios";
import { getToken } from "../utils";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const state = {
  select: () => api.get("states"),
};

export const home = {
  selectPlaceType: ({ place = "", lat = 0, lon = 0, type = "" }) => {
    return api.get(
      `maps/search?place=${place}&type=${type}&latitude=${lat}&longitude=${lon}`
    );
  },
  selectBranchLocation: ({ lat = 0, lng = 0, type = "", radius = "0" }) => {
    return api.get(
      `branch/type/${type}?latitude=${lat}&longitude=${lng}&radius=${radius}`
    );
  },
  selectTypePlace: () => api.get("/type/place"),
};

export const road = {
  selectPlaceByLocation: ({ lat = 0, lng = 0, type = "", search = "" }) => {
    return api.get(
      `maps/search/location?latitude=${lat}&longitude=${lng}&type=${type}&search=${search}`
    );
  },
};

export const auth = {
  login: (data) => api.post("auth/authenticate", data),
  loginGoogle: (data) => api.post("auth/authenticate/google", data),
};

export const person = {
  selectByEmail: (email) => api.get(`user/email/${email}`),
  insert: (personData) => api.post("person/register", personData),
  updateEmail: (token) => api.put("person/authorization", token),
};

export const city = {
  selectAllByState: (stateId) => api.get(`states/${stateId}/cities`),
};

export const roadMap = {
  insert: (data) => api.post("roadmaps/register", data),
  selectByUser: (id) => api.get(`roadmaps/user/${id}`),
  selectPlacesByRoad: (id) => api.get(`placeroad/road/${id}`),
};

export const placeroad = {
  insert: (data) => api.post("placeroad/register", data),
};

export const posts = {
  insert: (data) => api.post("posts/register", data),
  select: ({ page = 0, size = 0 }) => {
    return api.get(`posts?page=${page}&size=${size}&sort=createdAt`);
  },
};

export const google = {
  selectDetails: (placeid) => api.get(`maps/search/${placeid}`),
};

export const branch = {
  selectDetails: (id) => api.get(`branch/${id}`),
  selectAll: ({ page = 0, size = 0 }) => api.get(`branch/?page=${page}&size=${size}&sort=createdAt`),
};

export const places = {
  selectAll: ({ page = 0, size = 0 }) => api.get(`places/?page=${page}&size=${size}&sort=createdAt`),
};

export const address = {
  selectLocationByAddress: (address) =>
    api.get(`maps/search/address?address=${address}`),
  selectDirection: (data) => api.post("maps/direction", data),
};
