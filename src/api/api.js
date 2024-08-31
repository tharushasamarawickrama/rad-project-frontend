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

export const getRequestsApi = async () => {
  try {
    const response = await axiosInstance.get("/user/get-requests");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getMessagesApi = async (requestId) => {
  try {
    const response = await axiosInstance.get(`/user/get-messages/${requestId}`);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const sendMessageApi = async (data) => {
  try {
    const response = await axiosInstance.post("/user/send-message", data);
    return response?.data;
  } catch (error) {
    return error;
  }
};


