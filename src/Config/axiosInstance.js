import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const currentAuthorization = config.headers.common.Authorization;
  if (currentAuthorization === "null") {
    config.headers.Authorization = token;
  } else {
    const oldToken = currentAuthorization;
    if (oldToken !== token) {
      config.headers.Authorization = token;
    }
  }
  return config;
});

export default axiosInstance;
