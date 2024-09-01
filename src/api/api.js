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

export const campaignsApi = async () => {
  try {
    const response = await axiosInstance.get("/open/get-campaigns");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getCampaignApi = async (id) => {
  try {
    const response = await axiosInstance.get(`/open/get-campaign/${id}`);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const createCampaignApi = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/add-campaign", data);
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAdminRequestsApi = async () => {
  try {
    const response = await axiosInstance.get("/admin/get-requests");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getAdminMessagesApi = async (requestId) => {
  try {
    const response = await axiosInstance.get(
      `/admin/get-messages/${requestId}`
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const sendAdminMessageApi = async (requestId, message) => {
  try {
    const response = await axiosInstance.post(
      `/admin/send-message/${requestId}`,
      { message }
    );
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

export const sendMessageApi = async (requestId, message) => {
  try {
    const response = await axiosInstance.post(
      `/user/send-message/${requestId}`,
      { message }
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const editCampaignApi = async (id, data) => {
  try {
    const response = await axiosInstance.put(
      `/admin/edit-campaign/${id}`,
      data
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteCampaignApi = async (id) => {
  try {
    const response = await axiosInstance.delete(`/admin/delete-campaign/${id}`);
    return response?.data;
  } catch (error) {
    return error;
  }
};
