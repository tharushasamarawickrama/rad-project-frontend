import axios from "axios";
import { getToken } from "../services/user.service";

const BaseUrl = "http://localhost:5000/v1";

const axiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    Authorization: getToken(),
  },
});

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
