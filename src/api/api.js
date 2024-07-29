import axios from "axios";

const BaseUrl = "http://localhost:3000/api/v1";

const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

const axiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    Authorization: getAuthToken(),
  },
});

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
