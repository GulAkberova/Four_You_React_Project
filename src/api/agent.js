import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://admin.foryoukid.com",
  withCredentials: false,
  headers: {
    'accept': 'application/json',
    'content-type': 'multipart/form-data'
 }
});
