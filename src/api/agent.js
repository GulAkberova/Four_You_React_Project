import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://admin.4youkid.com",
  withCredentials: false,
  headers: {
    'accept': 'application/json',
    'content-type': 'multipart/form-data'
 }
});
