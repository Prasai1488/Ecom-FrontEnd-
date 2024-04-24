import axios from "axios";

// creating axios instance
const $axios = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// axios request interceptor
$axios.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default $axios;
