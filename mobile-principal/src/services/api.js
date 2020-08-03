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
  validEmail: email => api.get(`/user/email/${email}`),
}

export const state = {
  select: () => api.get("states"),
};

export const auth = {
  login: data => api.post("auth/authenticate", data),
  loginGoogle: data => api.post("auth/authenticate/google", data),
};

export const person = {
  insert: personData => api.post("person/register", personData),
}

export const city = {
  selectAllByState: stateId => api.get(`states/${stateId}/cities`)
};



// export const local = {
//     selectAll: () => api.get("locais"),
//     selectById: idLocal => api.get(`locais/${idLocal}`),
//     insertLocal: local => api.post("locais/", local),
//     selectByDistance: (radius, latitude, longitude) => api.get(`locais/distance/${radius}`, {
//         params: {
//             latitude,
//             longitude
//         }
//     }),
// };

export default api;