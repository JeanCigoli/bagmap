import axios from "axios";

const api = axios.create({ baseURL: "https://viacep.com.br" });

export const address = {
  select: zipcode => api.get(`/ws/${zipcode}/json`)
};
