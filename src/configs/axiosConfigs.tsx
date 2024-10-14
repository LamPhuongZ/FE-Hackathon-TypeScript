import axios from "axios";
import { DOMAIN, TOKEN_KEY } from "../utils/settings";

const instance = axios.create({
  baseURL: DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

// Cấu hình headers trước khi gửi lên server:
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  const isLogin = !!token;
  if (isLogin) {
    console.log("Attaching Authorization header:", `Bearer ${token}`);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Tìm lỗi "401" bằng console.log (error)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = `/sign-in?redirectUrl=${window.location.pathname}`;
    }
    return Promise.reject(error);
  }
);

export default instance;
