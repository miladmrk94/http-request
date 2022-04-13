import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

axios.interceptors.request.use(
  (res) => {
    console.log(res);
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject;
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
};

export default http;
