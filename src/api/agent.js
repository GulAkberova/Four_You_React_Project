import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://65.108.159.186",
  withCredentials: false,
  headers: {
    'accept': 'application/json',
    'content-type': 'multipart/form-data'
 }
});
