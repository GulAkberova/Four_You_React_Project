import { axiosInstance } from "./agent";
export const data = {
  getAll: async (url) => {
    // let token = localStorage.getItem("token");

    let responsData = [];

    await axiosInstance
      .get(
        `/${url}/`
        // ,{
        //   headers: {
        //     Authorization: "Bearer " + token,
        //   },
        // }
      )
      .then((res) => {
        responsData = res.data;
      })
      .catch((err) => {
        console.log("err", err);
        // if (err.response.status == 401) window.location.href = "/";
      });

    return responsData;
  },
  getById: async (url, id) => {
    let response = {};
    await axiosInstance.get(`/${url}/${id}/`).then((res) => {
      response = res.data;
    });
    //  if(response==null){
    //   throw "404 Data not found"
    //  }

    return response;
  },
  getByPost: async (url, data) => {
    let response = {};

    await axiosInstance.post(`/${url}/`, data).then((res) => {
      response = res.data;
    });
    return response;
  },
  getByDelete: async (url, id) => {
    let response = {};

    await axiosInstance.delete(`${url}/${id}`).then((res) => {
      response = res.data;
    });

    return response;
  },
  getByPut: async (url, id, data) => {
    let response = {};
    await axiosInstance.put(`${url}/${id}`, data).then((res) => {
      response = res.data;
    });
    return response;
  },
};
