import axios from "axios";
import { getToken } from "../services/user.service";

const BaseUrl = "http://localhost:5000/v1";

const axiosInstance = axios.create({
  baseURL: BaseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginApi = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const signUpApi = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/signup", data);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const dashboardApi = async () => {
  try {
    const response = await axiosInstance.get("/admin/dashboard-data");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const upcomingCampaignsApi = async () => {
  try {
    const response = await axiosInstance.get("/open/get-upcoming-campaigns");
    return response?.data;
  } catch (error) {
    return error;
  }
};
